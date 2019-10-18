<template>
  <div id="app">
    <CurrencySelector :currencies="currencies" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CurrencySelector from './components/CurrencySelector.vue'

@Component({
  components: {
    CurrencySelector
  }
})
export default class App extends Vue {
  currencies: string[];

  constructor () {
    super()
    this.currencies = [
      'EUR',
      'PLN',
      'GEL',
      'DKK',
      'CZK',
      'GBP',
      'SEK',
      'USD',
      'RUB'
    ]
  }
}
</script>

<style lang="less">
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    height: 100%;
  }

  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  .clearfix:before,
  .clearfix:after {
    content: ' ';
    display: table;
  }

  .clearfix:after {
    clear: both;
  }
</style>
