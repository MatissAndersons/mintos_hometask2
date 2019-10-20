<template>
  <div class="currency">{{ nameLowercase }}<span class="remove-currency" @click="toggleCurrency">x</span></div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Currency from '@/components/Currency.vue'
import AbstractCurrency from '@/models/AbstractCurrency'

@Component
export default class SelectedCurrency extends Currency {
  @Prop()
  public currency!: AbstractCurrency;

  get nameLowercase () {
    return this.currency.name.toLowerCase()
  }
}
</script>

<style lang="less" scoped>
  .currency {
    color: #000;
    border: none;
    border-radius: 3px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 8px;
    width: calc(33.33% - 16px);
    text-align: center;
    font-size: 16px;
    letter-spacing: 0.5px;
  }

  .remove-currency {
    position: absolute;
    width: 21px;
    height: 21px;
    right: -8px;
    top: -9px;
    background-color: #333;
    border: 2px solid #fff;
    border-radius: 50%;
    color: #fff;
    line-height: 1;
    font-size: 14px;

    &:hover {
      background-color: #fff;
      border: 2px solid #333;
      color: #333;
      cursor: pointer;
    }
  }
</style>
