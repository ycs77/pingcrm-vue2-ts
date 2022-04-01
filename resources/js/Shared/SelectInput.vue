<template>
  <div>
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <select :id="id" ref="input" v-model="selected" v-bind="$attrs" class="form-select" :class="{ error: error }">
      <slot />
    </select>
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuid } from 'uuid'

export default Vue.extend({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `select-input-${uuid()}`
      },
    },
    error: String,
    label: String,
    value: [String, Number, Boolean],
  },
  data() {
    return {
      selected: this.value,
    }
  },
  watch: {
    selected(selected) {
      this.$emit('input', selected)
    },
  },
  methods: {
    focus() {
      (this.$refs.input as HTMLInputElement).focus()
    },
    select() {
      (this.$refs.input as HTMLInputElement).select()
    },
  },
})
</script>
