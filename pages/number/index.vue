<template>
	<div class="items-center text-center">
		<h1 class="text-xl text-gray-700">Demo Increment and Decrement a Number</h1>
		<h1 class="text-5xl text-gray-700 py-4 font-bold">{{ number }}</h1>
		<div class="my-4">
			<button class="w-40 py-2 px-8 bg-white rounded text-blue-500 mx-2 border border-blue-500 hover:text-white hover:bg-blue-500" @click="increment">Increment</button>
		</div>
		<div class="my-6">
			<button class="w-40 py-2 px-8 bg-white rounded text-red-500 mx-2 border border-red-500 hover:text-white hover:bg-red-500" @click="decrement">Decrement</button>
		</div>
		<div class="my-6">
			<button class="w-40 py-2 px-8 bg-white rounded text-green-500 mx-2 border border-green-500 hover:text-white hover:bg-green-500" @click="reset">Reset</button>
		</div>
	</div>
</template>

<script>
export default {
  computed: {
    number() {
      return this.$store.getters['number/getNumber']
    }
  },
  methods: {
    increment() {
      this.$store.commit('number/increment')
    },
    decrement() {
      this.$store.commit('number/decrement')
    },
    reset(){
      this.$store.commit('number/reset')
    }
  }, 
}
</script>