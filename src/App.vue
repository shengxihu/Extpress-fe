<template>
  	<div class="app" id="app">
  		<index></index>
  	</div>
</template>

<script>
import Index from './components/Index.vue'
export default {
	components: {
		Index
	}
}
</script>

<style lang='sass'>
.app {
	height: 100%;
}
</style>
