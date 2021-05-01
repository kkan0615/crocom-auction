import { ObjectDirective } from 'vue'

export const clickOutsideDirective =  (): ObjectDirective => ({
  beforeMount: (el, binding, vnode) => {
    el.clickOutsideEvent = (event: MouseEvent) => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        if (!binding.value)
          return

        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted: el => {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
})
