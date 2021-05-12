
import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from './index';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    language: args._[0],
    runInstall: args['--install'] || false,
  };
}

async function promptForMissingOptions(options) {
  const defaultLanguage = 'javascript';
  const defaultStack = 'minimal';
  if (options.skipPrompts) {
    return {
      ...options,
      language: options.language || defaultLanguage,
      stack: options.stack || defaultStack
    };
  }

  const questions = [];
  if (!options.language) {
    questions.push({
      type: 'list',
      name: 'language',
      message: 'Please choose which project language to use',
      choices: ['javascript', 'typescript'],
      default: defaultLanguage,
    });
  }

  if (!options.stack) {
    questions.push({
      type: 'list',
      name: 'stack',
      message: 'Please choose which stack to use',
      choices: ['minimal', 'monorepo'],
      default: defaultStack,
    });
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Should a git be initialized?',
      default: false,
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    language: options.language || answers.language,
    git: options.git || answers.git,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
