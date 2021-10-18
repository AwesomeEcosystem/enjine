<template>
  <div>
    <ul>
      <li v-for="(color, i) of colors" :key="i">
        <button
          :class="getClasses(color)"
          @click="setMode(color)">
          <component :is="`icon-${color}`"/>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import IconSystem from './icons/system'
import IconLight from './icons/light'
import IconDark from './icons/dark'

export default {
  components: {
    IconSystem,
    IconLight,
    IconDark
  },
  data () {
    return {
      colors: ['system', 'light', 'dark']
    }
  },
  methods: {
    setMode(color) {
      this.$colorMode.preference = color
    },
    getClasses (color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}
</style>
