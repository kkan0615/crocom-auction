<template>
  <div
    class="sm:flex sm:flex-row-reverse"
  >
    <div>
      <t-image
        v-if="productImages"
        :src="currentProductImage.file.href"
        :alt="currentProductImage.file.name"
      />
    </div>
    <div
      class="sm:mr-2 flex sm:flex-col gap-4"
    >
      <div
        v-for="(image, i) in productImages"
        :key="image.id"
        class="h-1/4 w-28 cursor-pointer hover:shadow-md"
        @click="onClickImageListItem(i)"
      >
        <t-image
          :src="image.file.href"
          :alt="image.file.name"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import useStore from '@/store'
import TImage from '@/components/tailwind/Image/index.vue'
import { ProductImage } from '@/interfaces/model/product/image'

export default defineComponent({
  name: 'ProductDetailImages',
  components: { TImage },
  setup () {
    const store = useStore()
    const currentImageIndex = ref(0)

    const productImages = computed(() => store.state.product.currentProduct.Images)
    const currentProductImage = computed(() => {
      if (productImages.value && productImages.value.length > 0)
        return productImages.value[currentImageIndex.value]

      return { } as ProductImage
    })

    const onClickImageListItem = (index: number) => {
      currentImageIndex.value = index
    }

    return {
      productImages,
      currentProductImage,
      onClickImageListItem,
    }
  }
})
</script>
