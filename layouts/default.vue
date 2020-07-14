<template>
  <div class="relative">
    <!-- :class="{ 'overflow-hidden h-screen': true }" -->
    <Head />
    <Nuxt />
    <Contact />
    <!-- <Load /> -->
    <!-- v-if="true" -->
  </div>
</template>
<script>
import Head from '~/components/nav'
import Contact from '~/components/contact'
// import Load from '~/components/spinner'
export default {
  components: {
    Head,
    Contact,
    // Load,
  },
}
</script>

<style></style>
