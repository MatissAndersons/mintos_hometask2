import { shallowMount } from '@vue/test-utils'
import AbstractCurrency from '@/models/AbstractCurrency'
import SelectedCurrency from '@/components/SelectedCurrency.vue'

describe('SelectedCurrency.vue', () => {
  it('Renders currency name correctly', () => {
    const currency = new AbstractCurrency('EUR')
    const wrapper = shallowMount(SelectedCurrency, {
      propsData: { currency }
    })
    expect(wrapper.text()).toMatch(currency.name.toLowerCase())
  })
})
