<template>
	<div>
		<div class="flex flex-wrap lg:px-4 md:px-4 px-1">
	        <div class="lg:w-1/4 md:w-1/3 w-1/2" v-for="user in users">
		      <div class="mx-1 lg:mx-2 shadow-md hover:shadow-lg rounded bg-white my-4">
		        <img v-bind:src="user.picture.large" v-bind:alt="user" class="h-64 w-full rounded-t"/>
		        <div class="p-4 text-center">
		          <h3 class="font-medium text-gray-800 mt-2">{{user.name.title}} {{user.name.first}} {{user.name.last}}</h3>
		          <p class="text-gray-500 text-sm mb-2">{{user.email}} </p>
		          <p class="py-2 text-sm text-gray-600">{{user.gender}}</p>
		          <p class="py-1 text-sm text-gray-600">{{user.phone}}</p>
		        </div>
		      </div>
		    </div>   
	    </div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		async asyncData({store}){
		  	await Promise.all([
		  		store.dispatch('user/getUser')
		  	])
		  	return
		},
		computed: {
		  	...mapState('user', {
		  		users: state => state.users
		  	})
		}
	}
</script>