<template>
  <div>
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <textarea :id="id" ref="inputRef" v-bind="$attrs" class="form-textarea" :class="{ error: error }" :value="(value as string)" @input="$emit('input', $event.target.value)" />
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from '@vue/composition-api'
import { v4 as uuid } from 'uuid'

export default defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => `textarea-input-${uuid()}`,
    },
    error: String,
    label: String,
    value: String as PropType<string | null>,
  },
  emits: ['input'],
  setup() {
    const inputRef = ref<HTMLInputElement>(null!)

    const focus = () => {
      inputRef.value.focus()
    }
    const select = () => {
      inputRef.value.select()
    }

    return { inputRef, focus, select }
  },
})
</script>
