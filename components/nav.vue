<template>
  <div class="fixed w-full z-20">
    <header class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <div class="w-24">
            <img src="/img/write.png" class="w-full" alt="" />
          </div>
          <nuxt-link to="/">
            <span class="ml-3 text-xl">Techhacks</span>
          </nuxt-link>
        </a>
        <nav
          class="md:ml-auto flex flex-wrap items-center text-base justify-center"
        >
          <nuxt-link to="/" class="mr-5 hover:text-white">Home</nuxt-link>
          <nuxt-link v-if="loggedin" to="/Profile" class="mr-5 hover:text-white"
            >Profile</nuxt-link
          >

          <button v-if="loggedin" class="mr-5 hover:text-white" @click="logout">
            Logout
          </button>
          <nuxt-link v-if="!loggedin" to="/Login" class="mr-5 hover:text-white"
            >Log In</nuxt-link
          >
          <nuxt-link
            v-if="!loggedin"
            to="/Register"
            class="mr-5 hover:text-white"
            >Sign Up</nuxt-link
          >
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    loggedin() {
      const exist = localStorage.getItem('id')
      if (exist) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    logout() {
      localStorage.clear()
      const host = window.location.origin
      window.location.assign(host)
    },
  },
}
</script>

<style></style>
