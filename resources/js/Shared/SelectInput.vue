<template>
  <div>
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <select :id="id" ref="inputRef" v-model="selected" v-bind="$attrs" class="form-select" :class="{ error: error }">
      <slot />
    </select>
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from '@vue/composition-api'
import { v4 as uuid } from 'uuid'

export default defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => `select-input-${uuid()}`,
    },
    error: String,
    label: String,
    value: [String, Number, Boolean] as PropType<string | number | boolean | null>,
  },
  emits: ['input'],
  setup(props, { emit }) {
    const selected = ref(props.value)
    const inputRef = ref<HTMLInputElement>(null!)

    watch(selected, (selected) => {
      emit('input', selected)
    })

    const focus = () => {
      inputRef.value.focus()
    }
    const select = () => {
      inputRef.value.select()
    }

    return { selected, inputRef, focus, select }
  },
})
</script>
