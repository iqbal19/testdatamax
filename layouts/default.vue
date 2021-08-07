<template>
  <div class="mx-3 lg:mx-20 mt-4">
  	<Nav></Nav>
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue';
export default {
	components: {
		Nav
	}
}
</script>