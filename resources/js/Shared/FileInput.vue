<template>
  <div>
    <label v-if="label" class="form-label">{{ label }}:</label>
    <div class="form-input p-0" :class="{ error: errors.length }">
      <input ref="fileRef" type="file" :accept="accept" class="hidden" @change="change" />
      <div v-if="!value" class="p-2">
        <button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm" @click="browse">Browse</button>
      </div>
      <div v-else class="flex items-center justify-between p-2">
        <div class="flex-1 pr-1">
          {{ value.name }} <span class="text-gray-500 text-xs">({{ filesize(value.size) }})</span>
        </div>
        <button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm" @click="remove">Remove</button>
      </div>
    </div>
    <div v-if="errors.length" class="form-error">{{ errors[0] }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    value: File as PropType<File | null>,
    label: String,
    accept: String,
    errors: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  emits: ['input'],
  setup(props, { emit }) {
    const fileRef = ref<HTMLInputElement>(null!)

    // prettier-ignore
    watch(() => props.value, (value) => {
      if (!value) {
        fileRef.value.value = ''
      }
    })

    const filesize = (size: number) => {
      var i = Math.floor(Math.log(size) / Math.log(1024))
      return (size / Math.pow(1024, i)).toFixed(2) + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
    }
    const browse = () => {
      fileRef.value.click()
    }
    const change = (e: Event) => {
      emit('input', (e.target as HTMLInputElement).files?.[0])
    }
    const remove = () => {
      emit('input', null)
    }

    return { fileRef, filesize, browse, change, remove }
  },
})
</script>
