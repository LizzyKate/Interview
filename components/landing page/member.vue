<template>
  <div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
          >
            Our Clique
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div
            v-for="(person, i) in members"
            :key="i"
            class="lg:w-1/3 sm:w-1/2 p-4"
          >
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-contain object-center"
                :src="`/img/${person.picture}`"
              />
              <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
              >
                <h2
                  class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                >
                  {{ person.subtitle }}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  {{ person.topic }}
                </h1>
                <p class="leading-relaxed">
                  {{ person.note }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-24 text-center">
        <button
          class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          See More Members
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    members() {
      return this.$store.state.member.people
    },
  },
}
</script>

<style></style>
