<template>
	<div id="Main">
		<router-view></router-view>
	</div>

</template>

<script>

	export default {
		name: 'Main',
		components: {

		},
    mounted() {
      this.$router.push({
      	path: '/mall/instructions/index',
      })
    },
	}
</script>
