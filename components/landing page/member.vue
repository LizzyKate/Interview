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
            With our clique, we’ve grown from a database of about 2,000 contacts
            to a database of more than 5,000 contacts. The team is helpful,
            knowledgeable, and with you all the way!
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div
            v-for="(person, i) in members"
            :key="i"
            class="lg:w-1/3 w-full p-4 xl:mb-0 mb-20"
          >
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="5000"
            >
              <nuxt-link :to="'/Profile/' + person._id">
                <div class="xl:flex relative">
                  <div>
                    <div class="xl:hidden block text-center">
                      <h2
                        class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                      >
                        {{ person.name }}
                      </h2>
                      <h1
                        class="title-font text-lg font-medium text-gray-900 mb-3"
                      >
                        {{ person.topic }}
                      </h1>
                      <p class="leading-relaxed break-all">
                        {{
                          person.about.length > 250
                            ? person.about.slice(0, 20) + '....'
                            : person.about
                        }}
                      </p>
                    </div>
                    <img
                      alt="gallery"
                      class="xl:absolute inset-0 w-full h-full object-cover"
                      :src="`${person.image}`"
                      style="height: 200px;"
                    />
                  </div>
                  <div
                    class="hidden xl:block px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 sm:inline-flex __shadow"
                    style="height: 200px;"
                  >
                    <h2
                      class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    >
                      {{ person.name }}
                    </h2>
                    <p class="leading-relaxed break-all">
                      {{
                        person.about.length > 250
                          ? person.about.slice(0, 20) + '....'
                          : person.about
                      }}
                    </p>
                  </div>
                </div>
              </nuxt-link>
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
      members: [],
    }
  },
  async mounted() {
    this.$store.commit('spin/loading', true)
    const people = await this.$axios.$get('/api/user')
    this.members = people.data
    this.$store.commit('spin/loading', false)
  },
}
</script>

<style></style>
