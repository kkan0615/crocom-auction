<template>
  <div
    class="text-2xl font-bold "
    :class="{
      ['text-red-500']: isDeadline,
    }"
  >
    {{ countdownStr }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'ProductDetailCountdown',
  props: {
    time: {
      type: Date,
      default: true,

    }
  },
  setup (props) {
    const countdownInterval = ref<number | null>(null)
    const countdownStr = ref('')
    const isDeadline = ref(false)

    onMounted(() => {
      countdownInterval.value = setCountdownInterval()
    })

    onUnmounted(() => {
      if (countdownInterval.value) {
        clearInterval(countdownInterval.value)
        countdownInterval.value
      }
    })

    const setCountdownInterval = () => {
      return setInterval(() => {
        const now = dayjs()

        const days = dayjs(props.time).diff(now, 'days')
        const hours = dayjs(props.time).diff(now, 'hours') % 24
        const minutes = dayjs(props.time).diff(now, 'minutes') % 60
        const seconds = dayjs(props.time).diff(now, 'seconds') % 60

        countdownStr.value = `${days}d ${hours}h ${minutes}m ${seconds}s`

        if (dayjs(props.time).diff(now, 'hours') < 12)
          isDeadline.value = true

        if (dayjs(props.time).diff(now, 'seconds') <= 0)
          clearInterval(countdownInterval.value)
      }, 1000)
    }


    return {
      countdownStr,
      isDeadline,
    }
  }
})
</script>
