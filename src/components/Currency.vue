<template>
  <div class="currency-wrapper">
    <input type="checkbox" :id="id">
    <label class="currency" :for="id"><span class="checkmark"></span>{{ name }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import slugify from 'slugify'

@Component
export default class Currency extends Vue {
  @Prop({ default: 'EUR' })
  name!: string;

  get id () {
    return 'select-' + slugify(this.name.toLowerCase())
  }
}
</script>

<style lang="less">
  .currency {
    display: block;
    padding: 5px 4px;
    background-color: #ECECEC;
    font-size: 19px;
    letter-spacing: 0.8px;
    cursor: pointer;

    &:hover {
      background-color: #DCDCDC;
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

  .currency-wrapper {
    position: relative;
    float: left;
    width: calc(33.33% - 8px);
    margin: 8px 4px;
    color: #144470;
    border: 1px solid #A3A3A3;

    input[type="checkbox"] {
      position: absolute;
      z-index: 0;
      opacity: 0;
      pointer-events: none;

      &:checked {
        + .currency {
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
      }
    }
  }
</style>
