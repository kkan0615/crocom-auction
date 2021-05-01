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
        label="Product name"
        :rules="productFormRules.title"
      />
      <t-text-input
        v-model:model-value="productForm.startPrice"
        type="number"
        clearable
        label="Start Price"
        :rules="productFormRules.startPrice"
      />
      <t-text-input
        v-model:model-value="productForm.startPrice"
        type="number"
        clearable
        label="Increase Price"
        :rules="productFormRules.startPrice"
      />
      <t-tag-input
        v-model:model-value="productForm.Tags"
        label="Tags"
        item-value="id"
        item-text="name"
        :items="dummyTags"
        multiple
        closable
      />
      <!--      <t-tag-input-->
      <!--        v-model:model-value="productForm.Tags"-->
      <!--      />-->
    </t-form>
    <!--    <div>-->
    <!--      <t-number-input-->
    <!--        v-model:model-value="productForm.startPrice"-->
    <!--        clearable-->
    <!--        label="시작 가격"-->
    <!--      />-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <t-number-input-->
    <!--        v-model:model-value="productForm.increasePrice"-->
    <!--        clearable-->
    <!--        label="인상가"-->
    <!--      />-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <t-date-picker-->
    <!--        v-model:model-value="productForm.endDatetime"-->
    <!--        label="종료일"-->
    <!--      />-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <t-select-input-->
    <!--        label="test"-->
    <!--        item-text="text"-->
    <!--        item-value="id"-->
    <!--        :items="[-->
    <!--          {-->
    <!--            id: 1,-->
    <!--            text: 'test 1',-->
    <!--          },-->
    <!--          {-->
    <!--            id: 2,-->
    <!--            text: 'test 2',-->
    <!--          }-->
    <!--        ]"-->
    <!--      />-->
    <!--    </div>-->
    <div>
      tags
    </div>
    <div>
      content
    </div>
    <t-divider />
    <div
      class="flex"
    >
      <t-button
        class="ml-auto"
        @click="onClickSave"
      >
        <t-material-icon
          class="mr-2"
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

          return v.length >= 20 ? 'Maximum is 20' : true
        }
      ],
      startPrice: [
        (v: number) => !!v || 'start price is required',
        (v: number) => v >= 0 || 'should be over 0',
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
