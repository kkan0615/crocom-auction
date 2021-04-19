import { ObjectDirective } from 'vue'

export const clickOutsideDirective =  (): ObjectDirective => ({
  beforeMount: (el, binding, vnode) => {
    console.log('mounted')
    el.clickOutsideEvent = (event: MouseEvent) => {
      console.log('still alive?')

      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted: el => {
    console.log('i am here')
    document.removeEventListener('click', el.clickOutsideEvent)
  },
})
