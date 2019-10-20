<template>
  <div class="currency" @click="toggleCurrency" :class="{selected: isSelected}"><span class="checkmark"></span>{{ name }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import slugify from 'slugify'
import AbstractCurrency from '@/models/AbstractCurrency'

@Component
export default class Currency extends Vue {
  @Prop()
  public currency!: AbstractCurrency;

  get id () {
    return 'select-' + slugify(this.name.toLowerCase())
  }

  get isSelected () {
    return this.currency.selected
  }

  get name () {
    return this.currency.name
  }

  toggleCurrency () {
    this.$emit('toggle-currency')
  }
}
</script>

<style lang="less">
  .currency {
    position: relative;
    float: left;
    width: calc(33.33% - 8px);
    margin: 8px 4px;
    color: #144470;
    border: 1px solid #A3A3A3;
    display: block;
    padding: 5px 4px;
    background-color: #ECECEC;
    font-size: 19px;
    letter-spacing: 0.8px;
    cursor: pointer;

    &:hover {
      background-color: #DCDCDC;
    }

    &.selected {
      background-color: #fff;

      .checkmark {
        &:before {
          content: 'x';
          position: absolute;
          left: 7px;
          top: 3px;
          color: red;
        }
      }
    }

    .checkmark {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 3px 6px 0 0;
      border: 1px solid #A3A3A3;
      border-radius: 3px;
      vertical-align: top;
    }
  }
</style>
