<template>
  <div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg lg:h-64 h-0 overflow-hidden mt-24">
            <img
              alt="content"
              class="object-contain object-center h-full w-full hidden lg:block"
              :src="info.image"
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div
                class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
              >
                <img :src="info.image" alt="" />
              </div>
              <div
                class="flex flex-col items-center text-center justify-center"
              >
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  {{ info.name }}
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base text-gray-600">
                  {{ info.email }}
                </p>
              </div>
            </div>
            <div
              class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
            >
              <p class="leading-relaxed text-lg mb-4">
                {{ info.about }}
              </p>
              <a
                v-if="info.owner"
                class="text-indigo-500 inline-flex items-center cursor-pointer"
                >Edit
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
    }
  },
  async mounted() {
    this.$store.commit('spin/loading', true)
    try {
      let myself
      if (this.$route.params.id) {
        myself = await this.$axios.$get('/api/user/' + this.$route.params.id)
      } else {
        myself = await this.$axios.$get(
          '/api/user/' + localStorage.getItem('id')
        )
      }
      console.log(myself)
      this.info = myself.data
    } catch (error) {
      console.error(error)
    }
    this.$store.commit('spin/loading', false)
  },
}
</script>

<style></style>
