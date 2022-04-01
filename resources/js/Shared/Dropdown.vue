<template>
  <button ref="buttonRef" type="button" @click="show = true">
    <slot />
    <portal v-if="show" to="dropdown">
      <div>
        <div style="position: fixed; top: 0; right: 0; left: 0; bottom: 0; z-index: 99998; background: black; opacity: 0.2" @click="show = false" />
        <div ref="dropdownRef" style="position: absolute; z-index: 99999" @click.stop="show = !autoClose">
          <slot name="dropdown" />
        </div>
      </div>
    </portal>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, nextTick, PropType, Ref } from '@vue/composition-api'
import { createPopper, Instance, Placement } from '@popperjs/core'

export default defineComponent({
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-end' as Placement,
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const show = ref(false)
    const popper = ref(null) as Ref<Instance | null>
    const buttonRef = ref<HTMLElement>(null!)
    const dropdownRef = ref<HTMLElement>(null!)

    watch(show, (show) => {
      if (show) {
        nextTick(() => {
          popper.value = createPopper(buttonRef.value, dropdownRef.value, {
            placement: props.placement,
            modifiers: [
              {
                name: 'preventOverflow',
                options: {
                  altBoundary: true,
                },
              },
            ],
          })
        })
      } else if (popper.value) {
        setTimeout(() => popper.value?.destroy(), 100)
      }
    })

    onMounted(() => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          show.value = false
        }
      })
    })

    return { show, popper, buttonRef, dropdownRef }
  },
})
</script>
