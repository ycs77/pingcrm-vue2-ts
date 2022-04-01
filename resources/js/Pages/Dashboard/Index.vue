<template>
  <div>
    <Head title="Dashboard" />
    <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>
    <p class="mb-8 leading-normal">Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how <a class="text-indigo-500 hover:text-orange-600 underline" href="https://inertiajs.com">Inertia.js</a> works.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Head } from '@inertiajs/inertia-vue'
import Layout from '@/Shared/Layout.vue'

export default defineComponent({
  components: {
    Head,
  },
  layout: Layout,
})
</script>
