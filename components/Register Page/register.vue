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
          <input
            v-model="Fullname"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Full Name"
            type="text"
          />
          <input
            v-model="email"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Email"
            type="email"
            required
          />
          <input
            v-model="password"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Password"
            type="password"
          />
          <textarea
            v-model="about"
            class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
            placeholder="About Me"
          ></textarea>
          <div
            class="flex w-full mb-6 items-center justify-center bg-grey-lighter"
          >
            <label
              class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white"
            >
              <svg
                v-show="check"
                class="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                />
              </svg>
              <span v-show="check" class="mt-2 text-base leading-normal"
                >Select a file</span
              >
              <span class="text-base text-black leading-normal">{{
                name
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
            :class="{ dim: authenticate === true }"
          >
            Sign Up
          </button>
          <button
            class="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            @click="cancel()"
          >
            Cancel
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Already Have an account, log in.
          </p>
          <nuxt-link to="/Login">
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
            >
              Login
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
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
      this.name = ''
      const files = Object.values(e.target.files)
      files.forEach((element) => {
        this.name = element.name
      })
      if (this.name !== '') {
        this.check = false
      }
    },
    cancel() {
      this.name = ''
      this.email = ''
      this.password = ''
      this.Fullname = ''
      this.about = ''
      this.check = true
    },
  },
}
</script>

<style>
.dim {
  opacity: 0.5;
}
</style>
