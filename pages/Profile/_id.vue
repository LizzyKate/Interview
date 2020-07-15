<template>
  <div>
    <Profile />
  </div>
</template>

<script>
import Profile from '~/components/Profile page/about'
export default {
  components: {
    Profile,
  },
  middleware: ['auth'],
}
</script>

<style></style>
