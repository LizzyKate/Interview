<template>
  <div>
    <section
      class="text-gray-700 body-font lg:flex lg:justify-center lg:items-center"
    >
      <p v-if="error" class="my-64">An Error Occured</p>
      <div v-if="edit && !error" class="flex-grow">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!edit && !error" class="mt-64 mb-24 mr-24">
        <form @submit.prevent>
          <input
            v-model="name"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4 w-full"
            placeholder="Change Name"
            type="text"
            required
          />
          <input
            v-model="password"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4 w-full"
            placeholder="Change Password"
            type="password"
            required
          />
          <textarea
            v-model="about"
            minlength="20"
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
      password: '',
      about: '',
      error: false,
    }
  },
  computed: {
    authenticate() {
      if (this.name !== '' && this.password !== '' && this.about !== '') {
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
      this.error = false
      this.info = myself.data
    } catch (error) {
      this.error = true
    }
    this.$store.commit('spin/loading', false)
  },
  methods: {
    editing() {
      this.edit = !this.edit
    },
    cancel() {
      this.edit = true
    },
    async update() {
      const data = {
        name: this.name,
        password: this.password,
        about: this.about,
      }
      this.$store.commit('spin/loading', true)
      const identity = localStorage.getItem('id')
      try {
        const newInfo = await this.$axios.$patch('/api/user/' + identity, data)
        console.log(newInfo)
        // const host = window.location.origin
        // window.location.assign(host + '/profile/' + identity)
      } catch (error) {
        alert('An error occured')
        console.log(error)
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
