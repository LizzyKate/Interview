<template>
  <div class="relative" :class="{ 'overflow-hidden h-screen': wait }">
    <Head />
    <Nuxt />
    <Contact />
    <Load v-if="wait" />
  </div>
</template>
<script>
import Head from '~/components/nav'
import Contact from '~/components/contact'
import Load from '~/components/spinner'
export default {
  components: {
    Head,
    Contact,
    Load,
  },
  computed: {
    wait() {
      return this.$store.state.spin.load
    },
  },
}
</script>

<style></style>
