<template>
  <t-card
    class="hover:shadow-lg relative"
  >
    <product-detail-dead-line
      v-if="deadline"
    />
    <t-card-image>
      <img
        :alt="image.name"
        :src="image.href"
      >
    </t-card-image>
    <t-card-title
      class="py-1"
    >
      {{ product.title }}
    </t-card-title>
    <t-card-content>
      <div
        class="text-red-500 text-lg font-bold"
      >
        $ {{ product.currentPrice || product.startPrice }}
      </div>
      <div>
        {{ endDatetime }}
      </div>
    </t-card-content>
  </t-card>
</template>

<script lang="ts">
import { computed, defineComponent, } from 'vue'
import TCard from '@/components/tailwind/Card/index.vue'
import TCardTitle from '@/components/tailwind/Card/components/Title.vue'
import { ProductInfo, ProductListInfo } from '@/interfaces/model/product/product'
import { CustomFile } from '@/interfaces/system/file'
import TCardImage from '@/components/tailwind/Card/components/Image.vue'
import TCardContent from '@/components/tailwind/Card/components/Content.vue'
import dayjs from 'dayjs'
import ProductDetailDeadLine from '@/views/product/Detail/components/DeadlineMark.vue'

export default defineComponent({
  name: 'ProductDetailProduct',
  components: { ProductDetailDeadLine, TCardContent, TCardImage, TCardTitle, TCard },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {
        return {} as ProductInfo
      }
    }
  },
  setup (props) {
    const product = props.product as ProductListInfo
    // let countDown: number | null = null

    const image = computed(() => {
      if (!product.Images || product.Images.length <= 0)
        return {
          name: 'test',
          fileType: 'image',
          href: '',
        } as CustomFile

      const found = product.Images.find(productImage => productImage.isRepresentation)
      if (!found)
        return {} as CustomFile

      return found.file
    })

    const endDatetime = computed(() => dayjs(product.endDatetime).format('llll'))

    const deadline = computed(() => dayjs(product.endDatetime).diff(dayjs(), 'hours') < 12)


    // onMounted(() => {
    //   // initCountdown()
    // })
    //
    // onUnmounted(() => {
    //   // clearCountdown()
    // })
    //
    // const setCountdown = () => {
    //   console.log('test')
    // }
    //
    // const initCountdown = () => {
    //   countDown = setInterval(() => setCountdown(), 1000)
    // }
    //
    // const clearCountdown = () => {
    //   if (countDown)
    //     clearInterval(countDown)
    // }

    return {
      image,
      endDatetime,
      deadline,
    }
  }
})
</script>
