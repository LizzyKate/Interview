<template>
  <div>
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center __increase"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mt-24 lg:mt-0"
          >
            Share Your <br class="hidden lg:inline-block" />Knowledge
          </h1>
          <p class="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div class="flex justify-center">
            <nuxt-link to="/profile">
              <button
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Profile
              </button>
            </nuxt-link>
            <div v-if="loggedin">
              <nuxt-link to="/login">
                <button
                  class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                >
                  Register
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="img/libray.png"
          />
        </div>
      </div>
    </section>
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
        // this.$router.push('/register')
        return false
      }
    },
  },
}
</script>

<style></style>
