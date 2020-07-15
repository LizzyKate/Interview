<template>
  <div>
    <About />
  </div>
</template>

<script>
// import { authenticate } from '../../routeGuard'
// import axios from '../../authentication.axios'
import About from './about'
export default {
  components: {
    About,
  },
  beforeRouteEnter(to, from, next) {
    // if (authenticate()) {
    //   next(true)
    //   // do something //
    // } else {
    //   next('/login')
    // }
  },
}
</script>

<style></style>
