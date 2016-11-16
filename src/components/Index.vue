<template>
	<div :class="$style.index">
		<navBar></navBar>
		<div :class="$style.tabs">
			<div :class="$style.item">
				<router-link :class="$style.active" to="/index">首页</router-link>
			</div>
			<div :class="$style.item">
				<router-link to="/recommend">推荐课程</router-link>
			</div>
			<div :class="$style.item">
				<router-link to="/index">所有课程</router-link>
			</div>
		</div>
		<div>
			<router-view></router-view>
		</div>
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

<style lang='sass' module>
@import '../assets/reset.scss';
@import '../assets/value.scss';
.home {
	font-family: 'STHeiti';
	height: 100%;
}
.tabs {
	height: 48px;
	padding: 0 16px;
	font-size: 0;
	background: $shallow_silver;
}
.active {
	border-bottom: 4px solid currentColor;
	color: #EEAB5D;
}
.item {
	width: 80px;
	display: inline-block;
	font-size: 14px;
	text-align: center;
}
a {
	display: inline-block;
	color: #666666;
	padding: 0 5px;
	line-height: 44px;
}
</style>
