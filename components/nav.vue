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
          <span class="ml-3 text-xl">Techhacks</span>
        </a>
        <nav
          class="md:ml-auto flex flex-wrap items-center text-base justify-center"
        >
          <nuxt-link to="/" class="mr-5 hover:text-white">Home</nuxt-link>
          <nuxt-link to="/Profile" class="mr-5 hover:text-white"
            >Profile</nuxt-link
          >
          <nuxt-link to="/Login" class="mr-5 hover:text-white"
            >Log In</nuxt-link
          >
          <nuxt-link to="/Register" class="mr-5 hover:text-white"
            >Sign Up</nuxt-link
          >
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
