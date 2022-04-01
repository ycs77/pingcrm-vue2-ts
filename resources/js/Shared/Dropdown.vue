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
import Vue, { PropType } from 'vue'
import { createPopper, Instance, Placement } from '@popperjs/core'

export default Vue.extend({
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
  data() {
    return {
      show: false,
      popper: null as Instance | null,
    }
  },
  watch: {
    show(show) {
      if (show) {
        this.$nextTick(() => {
          this.popper = createPopper(this.$el, this.$refs.dropdown as HTMLElement, {
            placement: this.placement,
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
      } else if (this.popper) {
        setTimeout(() => this.popper?.destroy(), 100)
      }
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.show = false
      }
    })
  },
})
</script>
