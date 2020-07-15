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
            Log In
          </h2>
          <form @submit.prevent>
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
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
              :class="{ dim: authenticate === true }"
              :disabled="authenticate"
              @click="submit"
            >
              Login
            </button>
            <nuxt-link to="/Register">
              <button
                class="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
              >
                Sign Up
              </button>
            </nuxt-link>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
// import { authenticate } from '~/middleware/routeGuard'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    authenticate() {
      if (this.email !== '' && this.password !== '') {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    async submit() {
      const data = {
        email: this.email,
        password: this.password,
      }
      this.$store.commit('spin/loading', true)
      try {
        const details = await this.$axios.$post('/api/auth/signin', data)
        localStorage.setItem('auth-token', details.token)
        localStorage.setItem('id', details._id)
        const host = window.location.origin
        window.location.assign(host + '/profile/' + details.id)
        // this.$router.push()
      } catch (error) {
        alert('Incorrect Username And Password')
        console.error(error.response)
      }

      this.$store.commit('spin/loading', false)

      // axios.post('/api/auth/signin', data).then(
      //   ({ data }) => {
      //     console.log('i am posted')
      //     console.log(data)
      //     localStorage.setItem('auth-token', data.data)
      //     this.$router.push('/Profile')
      //   },
      //   (err) => {
      //     console.log(err.response)
      //     if (err.response.data.error === 'incorrect username or password')
      //       alert('Incorrect Email And Password')
      //   }
      // )
    },
  },
}
</script>

<style>
.dim {
  opacity: 0.5;
}
</style>
