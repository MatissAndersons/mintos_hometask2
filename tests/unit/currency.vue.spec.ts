import { shallowMount } from '@vue/test-utils'
import AbstractCurrency from '@/models/AbstractCurrency'
import Currency from '@/components/Currency.vue'

describe('Currency.vue', () => {
  it('Renders currency name correctly', () => {
    const currency = new AbstractCurrency('EUR')
    const wrapper = shallowMount(Currency, {
      propsData: { currency }
    })
    expect(wrapper.text()).toMatch(currency.name)
  })
})
