<template>
  <div>
    <section
      class="text-gray-700 body-font lg:flex lg:justify-between lg:items-center container mx-auto"
    >
      <div class="mx-auto">
        <p v-if="error" class="pt-64 pb-32 text-center text-red-900">
          An Error Occured
        </p>
        <div v-if="edit && !error">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 w-full mx-auto">
              <div class="rounded-lg lg:h-64 h-0 overflow-hidden mt-24">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full hidden lg:block"
                  :src="info.image"
                />
              </div>
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="flex justify-center">
                    <img
                      :src="info.image"
                      class="w-12 h-12 rounded-full p-1 bg-gray-200 text-gray-400 object-contain"
                      alt=""
                    />
                  </div>
                  <div
                    class="flex flex-col items-center text-center justify-center"
                  >
                    <h2
                      class="font-medium title-font mt-4 text-gray-900 text-lg"
                    >
                      {{ info.name }}
                    </h2>
                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p class="text-base text-gray-600 break-all">
                      {{ info.email }}
                    </p>
                  </div>
                </div>
                <div
                  class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
                >
                  <h6 class="text-center">About Me</h6>
                  <div
                    class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-8 mx-auto"
                  ></div>
                  <p class="leading-relaxed text-lg mb-4 break-all text-center">
                    {{ info.about }}
                  </p>
                  <button
                    v-if="info.owner"
                    class="text-indigo-500 inline-flex items-center cursor-pointer"
                    @click="editing()"
                  >
                    Edit
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
                  </button>
                  <!-- <button
                  class="text-white bg-red-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-red-600 rounded text-lg ml-6"
                  @click="deleteAccount"
                >
                  Delete
                </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!edit && !error" class="pt-64 mb-24">
          <h5 class="text-center">Change Your Details</h5>
          <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-8 mx-auto"></div>
          <form class="mx-auto w-3/4 md:w-full lg:mx-0" @submit.prevent>
            <h6>Your Full Name</h6>
            <input
              v-model="name"
              class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4 w-full"
              placeholder="Change Name"
              type="text"
              required
            />
            <h6>Tell Us About Yourself</h6>
            <textarea
              v-model="about"
              class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none w-full"
              placeholder="About Me"
              required
            ></textarea>
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
              :class="{ dim: authenticate === true }"
              type="submit"
              :disabled="authenticate"
              @click="update()"
            >
              Update
            </button>
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
              @click="cancel()"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
      <div v-if="edit && !error" class="mt-0 lg:mt-40 mb-8 mr-10">
        <div class="text-center">Our Members</div>
        <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-8 mx-auto"></div>
        <div class="flex flex-col ml-12 lg:ml-0 items-center text-left">
          <div
            v-for="(person, i) in members"
            :key="i"
            class="flex flex-row w-full items-center justify-start p-2 cursor-pointer"
          >
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="5000"
            >
              <nuxt-link :to="'/Profile/' + person._id">
                <img
                  :src="person.image"
                  class="w-12 h-12 rounded-full p-1 bg-gray-200 text-gray-400 object-contain"
                  alt=""
                />
              </nuxt-link>
            </div>
            <div class="ml-4">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="5000"
              >
                <nuxt-link :to="'/Profile/' + person._id">
                  {{ person.name }}
                </nuxt-link>
              </div>
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
      edit: true,
      name: '',
      about: '',
      error: false,
      members: [],
    }
  },
  computed: {
    authenticate() {
      if (this.name !== '' && this.about !== '') {
        return false
      } else {
        return true
      }
    },
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
      const people = await this.$axios.$get('/api/user')
      this.members = people.data
      this.error = false
      this.info = myself.data
    } catch (error) {
      this.error = true
    }
    this.$store.commit('spin/loading', false)
  },
  methods: {
    // async deleteAccount() {
    //   this.$store.commit('spin/loading', true)
    //   try {
    //     await this.$axios.$delete('/api/user')
    //     const host = window.location.origin
    //     window.location.assign(host)
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   this.$store.commit('spin/loading', false)
    // },
    editing() {
      this.edit = !this.edit
      this.name = this.info.name
      this.about = this.info.about
    },
    cancel() {
      this.edit = true
    },
    async update() {
      const changed = {
        name: this.name,
        about: this.about,
      }
      this.$store.commit('spin/loading', true)
      try {
        const newInfo = await this.$axios.$patch('/api/user', changed)
        this.info = newInfo.data
        this.edit = true
      } catch (error) {
        alert('An error occured')
      }
      this.$store.commit('spin/loading', false)
    },
  },
}
</script>

<style>
.dim {
  opacity: 0.5;
}
</style>
