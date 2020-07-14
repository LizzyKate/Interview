<template>
  <div>
    <Head />
    <Ban />
    <Member />
    <Contact />
  </div>
</template>

<script>
import Head from './nav'
import Ban from './banner'
import Member from './member'
import Contact from './contact'
export default {
  components: {
    Head,
    Ban,
    Member,
    Contact,
  },
}
</script>

<style></style>
