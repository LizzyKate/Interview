/* eslint-disable no-console */ /* eslint-disable no-console */
<template>
  <div>
    <section class="text-gray-700 body-font">
      <div
        class="container px-5 pb-24 pt-40 mx-auto flex flex-wrap items-center"
      >
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p class="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div
          class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <p v-if="error.length" class="text-red-900 font-bold">
            {{ error }}
          </p>
          <form @submit.prevent>
            <input
              v-model="Fullname"
              class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4 w-full"
              placeholder="Full Name"
              type="text"
              required
            />
            <input
              v-model="email"
              class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4 w-full"
              placeholder="Email"
              type="email"
              required
            />
            <input
              v-model="password"
              class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4 w-full"
              placeholder="Password"
              type="password"
              required
            />
            <textarea
              v-model="about"
              class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none w-full"
              placeholder="About Me"
              required
            ></textarea>
            <div
              class="flex w-full mb-6 items-center justify-center bg-grey-lighter"
            >
              <label
                class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white"
              >
                <svg
                  v-if="!files.name"
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                  />
                </svg>
                <span v-if="!files.name" class="mt-2 text-base leading-normal"
                  >Select a file</span
                >
                <span class="text-base text-black leading-normal">{{
                  files.name
                }}</span>
                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="change"
                />
              </label>
            </div>
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              :disabled="authenticate"
              type="submit"
              :class="{ dim: authenticate === true }"
              @click="submit()"
            >
              Sign Up
            </button>
            <span
              class="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              @click="cancel()"
            >
              Cancel
            </span>
            <p class="text-xs text-gray-500 mt-3">
              Already Have an account, log in.
            </p>
            <nuxt-link to="/Login">
              <button
                class="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                type="submit"
              >
                Login
              </button>
            </nuxt-link>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: '',
      files: {},
      check: true,
      email: '',
      password: '',
      Fullname: '',
      about: '',
    }
  },
  computed: {
    authenticate() {
      if (
        this.email !== '' &&
        this.password !== '' &&
        this.Fullname !== '' &&
        this.about !== ''
      ) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    change(e) {
      this.files = e.target.files[0]
    },
    cancel() {
      this.files = {}
      this.email = ''
      this.password = ''
      this.Fullname = ''
      this.about = ''
      this.check = true
    },
    async submit() {
      console.log('debuggin')
      this.$store.commit('spin/loading', true)
      if (
        this.Fullname !== '' &&
        this.email !== '' &&
        this.password !== '' &&
        this.about !== '' &&
        this.files.name
      ) {
        const fd = new FormData()

        fd.append('email', this.email)
        fd.append('name', this.Fullname)
        fd.append('password', this.password)
        fd.append('about', this.about)
        fd.append('image', this.files)
        try {
          const response = await this.$axios.$post('/api/auth/signup', fd)
          console.log(response)
          localStorage.setItem('auth-token', response.token)
          localStorage.setItem('id', response.id)
          window.location.assign('profile/' + response.id)
          // this.$router.push('/profile/' + response.id)
        } catch (error) {
          console.error(error.response)
          if (error.response?.data?.error === 'user already exists') {
            alert('email already exist')
          } else {
            alert('An Error Occured')
          }
        }
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
