<template>
	<div class="index">
		<navBar></navBar>
		<cont></cont>
	</div>
</template>

<script>
import NavBar from './common/NavBar.vue'
import Cont from './index/Cont.vue'
export default {
	components: {
		NavBar,
		Cont
	}
}
</script>

<style lang='sass' scoped>
.home {
	font-family: 'STHeiti';
	height: 100%;
}
</style>
