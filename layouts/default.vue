<template>
  <div>
    <Head />
    <Nuxt />
    <Contact />
  </div>
</template>
<script>
import Head from '~/components/nav'
import Contact from '~/components/contact'
export default {
  components: {
    Head,
    Contact,
  },
}
</script>

<style></style>
