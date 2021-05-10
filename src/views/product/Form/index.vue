<template>
  <div
    class="sm:w-3/5 ml-auto mr-auto flex flex-col gap-3 mt-4"
  >
    {{ productForm }}
    <t-form
      ref="formRef"
    >
      <div
        class="mb-5"
      >
        <div
          class="mb-2"
        >
          Product images
        </div>
        <t-base-input
          no-ring
          :model-value="productForm.Images"
          :rules="productFormRules.Images"
        >
          <div
            class="p-4 w-full"
          >
            <t-grid
              :cols="4"
              :gap="4"
            >
              <div
                v-for="(image, index) in productForm.Images"
                :key="index"
                class="h-44 relative"
              >
                <div
                  class="absolute rotated-crown"
                >
                  <i
                    v-if="index === 0"
                    class="gg-crown mb-2 text-yellow-500"
                  />
                </div>
                <div
                  class="h-full w-full text-center ring-1 flex justify-center p-2"
                  :class="{
                    ['ring-yellow-500']: index === 0
                  }"
                >
                  <img
                    v-if="image.file.href"
                    style="max-width: 100%; max-height: 100%; object-fit: cover;"
                    :src="image.file.href"
                    :alt="image.file.name"
                  >
                </div>
              </div>
              <!--     add button will be here     -->
              <div
                class="h-44 w-full"
              >
                <t-file-drag-and-drop
                  accept="image/*"
                  @uploaded="onUploadedImage"
                />
              </div>
            </t-grid>
          </div>
        </t-base-input>
      </div>
      <t-text-input
        v-model:model-value="productForm.title"
        clearable
        visible-count
        :max-count="40"
        label="Product name"
        :rules="productFormRules.title"
      >
        <template
          #label
        >
          <span
            class="text-red-500"
          >
            *
          </span>
          Product name
        </template>
      </t-text-input>
      <t-text-input
        v-model:model-value="productForm.startPrice"
        class="hide-number-input"
        type="number"
        clearable
        label="Start Price"
        :rules="productFormRules.startPrice"
      >
        <template
          #label
        >
          <span
            class="text-red-500"
          >
            *
          </span>
          Start Price
        </template>
      </t-text-input>
      <t-text-input
        v-model:model-value="productForm.increasePrice"
        type="number"
        clearable
        label="Increase Price"
        :rules="productFormRules.increasePrice"
      >
        <template
          #label
        >
          <span
            class="text-red-500"
          >
            *
          </span>
          Increase Price
        </template>
      </t-text-input>
      <t-text-input
        v-model:model-value="productForm.endDatetime"
        type="datetime-local"
        clearable
        label="End datetime"
        :rules="productFormRules.endDatetime"
      >
        <template
          #label
        >
          <span
            class="text-red-500"
          >
            *
          </span>
          End datetime
        </template>
      </t-text-input>
      <t-tag-input
        v-model:model-value="productForm.Tags"
        label="Tags"
        item-value="id"
        item-text="name"
        :items="dummyTags"
        multiple
        closable
      />
    </t-form>
    <t-divider />
    <div
      class="flex"
    >
      <t-button
        class="ml-auto shadow-lg"
        @click="onClickSave"
      >
        <t-material-icon
          class="mr-2 text-lg"
        >
          save
        </t-material-icon>
        save
      </t-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import TTextInput from '@/components/tailwind/input/Text/index.vue'
import TFileDragAndDrop from '@/components/tailwind/input/dragAndDrop/File/index.vue'
import TButton from '@/components/tailwind/Button/index.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TDivider from '@/components/tailwind/Divider/index.vue'
import useStore from '@/store'
import { RuleType } from '@/interfaces/system/rule'
import { ProductForm } from '@/interfaces/model/product/product'
import TForm from '@/components/tailwind/Form/index.vue'
import TTagInput from '@/components/tailwind/input/Tag/index.vue'
import { dummyTags } from '@/dummy/model/product/tag'
import { CustomFile } from '@/interfaces/system/file'
import { ProductImage } from '@/interfaces/model/product/image'
import TGrid from '@/components/tailwind/grid/Default/index.vue'
import TBaseInput from '@/components/tailwind/input/Base/index.vue'

export default defineComponent({
  name: 'FormProduct',
  components: { TBaseInput, TGrid, TTagInput, TForm, TDivider, TMaterialIcon, TButton, TFileDragAndDrop, TTextInput },
  setup () {
    const store = useStore()

    const formRef = ref<InstanceType<typeof TForm> | null>(null)

    const productForm = computed(() => store.state.product.currentProductForm)

    const productFormRules: RuleType<ProductForm> = {
      title: [
        (v: string) => !!v || 'no title',
        (v: string) => {
          if (!v)
            return true

          return v.length >= 40 ? 'Maximum is 40' : true
        }
      ],
      startPrice: [
        (v: string) => !!v || 'start price is required',
        (v: string) => Number(v) >= 0 || 'should be over 0',
      ],
      increasePrice: [
        (v: string) => !!v || 'increase price is required',
        (v: string) => Number(v) >= 0 || 'should be over 0',
      ],
      endDatetime: [
        (v: string) => !!v || 'End date time is required',
      ],
      Images: [
        (v: Array<ProductImage>) => {
          if (!v || v.length === 0)
            return 'At least one image is required'

          return true
        }
      ]
    }

    const onClickSave = () => {
      if (formRef.value) {
        formRef.value.validate()
      }
    }

    const onUploadedImage = (file: CustomFile) => {
      if (!productForm.value.Images)
        productForm.value.Images = []

      productForm.value.Images.push({
        isRepresentation: productForm.value.Images.length === 0,
        file,
      } as ProductImage)
    }

    return {
      formRef,
      productForm,
      productFormRules,
      dummyTags,
      onClickSave,
      onUploadedImage,
    }
  }
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
