<template>
  <div>
    <Head title="Reports" />
    <h1 class="mb-8 text-3xl font-bold">Reports</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Head } from '@inertiajs/inertia-vue'
import Layout from '@/Shared/Layout.vue'

export default Vue.extend({
  components: {
    Head,
  },
  layout: Layout,
})
</script>
