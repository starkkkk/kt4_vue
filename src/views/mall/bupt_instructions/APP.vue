<template>
	<div id="app">
		<router-view></router-view>
	</div>

</template>

<script>

	export default {
		name: 'App',
		components: {

		},
		// mounted() {
		// 	this.$router.push({ path: '/mall/instructions/index/strategy', query: { enum: "100"}})
		// }
	}
</script>
