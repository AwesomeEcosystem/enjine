import chroma, { Color } from 'chroma.ts'
import { ColorRange, PaletteOptions } from '../types'

export class Theme {
  color: string;

  constructor(color?: string) {

    // if (color = 'tourismo') {
    //   this.colors('#bcc740')
    // }

    this.color(color || '#bcc740');
  }

  color(color?: string, options?: PaletteOptions = {}) {

    if (this.color && !color) {
      const color: any = this.color
    }

    if (!color || typeof color !== 'string') {
      throw new Error('Please provide a valid "color" string parameter')
  	}
  	const colorChroma = chroma.color(color)
  	const defaultColorscale = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
  	const { name = 'brand', ui = true, uiMix = 0.2, grayscale = true, grayscaleMix = 0.03, palette = {}, colorscale = defaultColorscale } = options
    const mode = options.mode || 'lab'

  	function mix (baseColor: Color | string, amount: number): string {
  		return chroma.mix(baseColor, colorChroma, amount, mode).hex()
  	}

  	function addToPalette (name: string, value: string | ColorRange) {
  		if (!palette[name]) {
  			palette[name] = value
  		}
  	}

  	function scalePalette (baseColor: Color | string, suffixes: Array<string | number>, padding: number = 0.1): ColorRange {
  		const colorscale = chroma.scale([ 'white', baseColor, 'black' ]).padding(padding).colors(suffixes.length).mode(mode)
  		const colorRange: ColorRange = {}
  		suffixes.forEach((suffix, index) => colorRange[suffix] = colorscale[index])
  		return colorRange
  	}

  	addToPalette(name, scalePalette(colorChroma, colorscale))

  	// UI Colors https://github.com/adevade/color-scheme-generator
  	if (ui) {
  		addToPalette('cta',     scalePalette(colorChroma.set('hsl.h', '+150'), colorscale))
  		addToPalette('info',    scalePalette(mix('#3df', uiMix), colorscale))
  		addToPalette('warning', scalePalette(mix('#fd0', uiMix), colorscale))
  		addToPalette('success', scalePalette(mix('#3e4', uiMix), colorscale))
  		addToPalette('danger',  scalePalette(mix('#f34', uiMix), colorscale))
  	}

  	// Grayscale
  	if (grayscale) {
  		//addToPalette('white', '#fff')
  		addToPalette('white', mix('#fff', grayscaleMix))
  		addToPalette('black', mix('#000', grayscaleMix))
  		addToPalette('transparent', 'transparent')
  		addToPalette('gray', scalePalette(mix('#2e2e2e', grayscaleMix), colorscale))
  	}
  	return palette
  }
}
