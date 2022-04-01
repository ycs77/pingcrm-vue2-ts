<template>
  <button :disabled="loading" class="flex items-center">
    <div v-if="loading" class="btn-spinner mr-2" />
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    loading: Boolean,
  },
})
</script>
