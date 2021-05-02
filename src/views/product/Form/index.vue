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
        Product images
        <div
          class="flex items-center gap-2"
        >
          <div
            v-for="(image, index) in productForm.Images"
            :key="index"
            class="h-44 w-1/4 flex flex-col"
          >
            <i
              v-if="index === 0"
              class="gg-crown mb-2 text-yellow-500"
            />
            <div>
              {{ image }}
            </div>
          </div>
          <!--     add button will be here     -->
          <div
            class="h-44 w-1/4 flex flex-col"
          >
            <t-file-drag-and-drop
              accept="image/*"
            />
          </div>
        </div>
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
        class="ml-auto text-lg shadow-lg"
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

export default defineComponent({
  name: 'FormProduct',
  components: { TTagInput, TForm, TDivider, TMaterialIcon, TButton, TFileDragAndDrop, TTextInput },
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
        (v: number) => !!v || 'start price is required',
        (v: number) => v >= 0 || 'should be over 0',
      ],
      increasePrice: [
        (v: number) => !!v || 'increase price is required',
        (v: number) => v >= 0 || 'should be over 0',
      ],
      endDatetime: [
        (v: string) => !!v || 'End date time is required',
      ]
    }

    const onClickSave = () => {
      if (formRef.value) {
        const validation = formRef.value.validate()
        console.log(validation)
      }
    }

    return {
      formRef,
      productForm,
      productFormRules,
      dummyTags,
      onClickSave,
    }
  }
})
</script>
