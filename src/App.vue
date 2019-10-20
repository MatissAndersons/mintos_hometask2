<template>
  <div id="app">
    <div class="currency-selector-container clearfix">
      <div class="selected-currencies clearfix">
        <SelectedCurrency v-bind:key="index" v-for="(currency, index) in selectedCurrencies" :currency="currency" v-on:toggle-currency="toggleCurrency(currency)" />
      </div>

      <div class="currency-list clearfix">
        <Currency v-bind:key="index" v-for="(currency, index) in currencies" :currency="currency" v-on:toggle-currency="toggleCurrency(currency)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AbstractCurrency from '@/models/AbstractCurrency'
import Currency from './components/Currency.vue'
import SelectedCurrency from './components/SelectedCurrency.vue'
import store from './store'

@Component({
  components: {
    SelectedCurrency,
    Currency
  }
})
export default class App extends Vue {
  constructor () {
    super()

    let currencyNames = [
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

    const existingCurrencies = store.state.currencies.map(currency => currency.name)

    currencyNames.forEach((currencyName) => {
      if (existingCurrencies.includes(currencyName)) {
        return
      }

      store.commit('addCurrency', new AbstractCurrency(currencyName))
    })
  }

  get currencies () {
    return store.state.currencies
  }

  get selectedCurrencies () {
    return this.currencies.filter(currency => currency.selected)
  }

  toggleCurrency (currency: AbstractCurrency) {
    const index = store.state.currencies.indexOf(currency)
    store.commit('toggleCurrency', index)
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

  .currency-selector-container {
    position: relative;
    width: 100%;
    max-width: 449px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 7px 7px 4px;
    box-shadow: 3px 3px 3px #D5D5D5;
    border: 1px solid #A3A3A3;
    border-radius: 5px;
  }

  .selected-currencies {
    margin-top: 9px;
  }

  .currency-list {
    margin-top: 12px;
    padding: 4px;
  }
</style>
