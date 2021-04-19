<template>
  <header
    class="w-full general-header relative h-32 bg-app-bar dark:bg-app-bar-dark dark:text-primary-dark-300"
  >
    <div
      class="content h-full ml-auto mr-auto flex flex-col"
    >
      <div
        class="w-full flex-grow-0 flex-shrink-0"
      >
        top
      </div>
      <div
        class="w-full flex-1 flex align-middle"
      >
        <div
          class="w-1/12 text-textPrimary-300 bg-primary-300 flex items-center justify-center"
        >
          <div
            class="text-center"
          >
            <t-material-icon
              class="text-4xl"
            >
              menu
            </t-material-icon>
            <div
              class="text-sm"
            >
              카테고리
            </div>
          </div>
        </div>
        <div
          class="flex flex-col w-full"
        >
          <div
            class="w-full flex items-center flex-grow flex-shrink-0"
          >
            <div>
              입력
              <input>
            </div>
            <div
              class="ml-auto flex items-center"
            >
              <t-dropdown-menu>
                <div
                  class="text-center w-20"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <t-material-icon
                    class="text-4xl"
                  >
                    person
                  </t-material-icon>
                  <div
                    class="text-sm"
                  >
                    내 정보
                  </div>
                </div>
              </t-dropdown-menu>
              <div
                class="text-center w-20"
              >
                <t-material-icon
                  class="text-4xl"
                >
                  shopping_cart
                </t-material-icon>
                <div
                  class="text-sm"
                >
                  장바구니
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-grow-0 flex-shrink"
          >
            <div
              class="mr-2"
            >
              방금 등록
            </div>
            <div>
              마감 임박
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TDropdownMenu from '@/components/tailwind/dropMenu/Down/index.vue'

export default defineComponent({
  name: 'HeaderGeneralLayout',
  components: { TDropdownMenu, TMaterialIcon },
  setup () {
    return
  }
})
</script>
