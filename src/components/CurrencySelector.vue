<template>
  <div class="currency-selector-container clearfix">
    <Currency v-bind:key="currency" v-for="currency in currencies" :name="currency" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Currency from './Currency.vue'

@Component({
  components: {
    Currency
  }
})
export default class CurrencySelector extends Vue {
  @Prop({ type: Array, default: [] })
  currencies!: string[]
}
</script>

<style lang="less">
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
</style>
