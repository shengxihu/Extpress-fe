<template>
	<div :class="$style.cont">
		<div :class="$style.tabs">
			<div :class="$style.item">
				<span :class="$style.active">首页</span>
			</div>
			<div :class="$style.item">
				<span>推荐课程</span>
			</div>
			<div :class="$style.item">
				<span>所有课程</span>
			</div>
		</div>
		<div :class="$style.artical_cont">
			<div :class="$style.img_cont">
				<img src="http://uedc.163.com/wp-content/uploads/2010/10/%E4%B8%80%E4%B8%AA%E5%83%8F%E7%B4%A0%E9%83%BD%E4%B8%8D%E8%83%BD%E5%B0%91-%E4%BB%8EPS%E5%88%B0FLASH%E5%88%B0%E5%89%8D%E7%AB%AF%E7%9A%84%E5%AF%B9%E4%BD%8D%E5%AE%9E%E7%8E%B0.jpg">
			</div>
			<div :class="$style.overview">
				<p :class="$style.intro">
					评价最高的课程合集，最热门的课程评价
				</p>
				<div :class="$style.like">
					<div :class="$style.view"></div>
					<div :class="$style.liked"></div>
				</div>
				<div :class="$style.time">2015-01-30</div>
			</div>
		</div>
	</div>
</template>

<style lang='sass' module>
@import '../../assets/value.scss';

img {
	width: 100%;
}
.tabs {
	height: 48px;
	padding: 0 16px;
	font-size: 0;
	background: $shallow_silver;
}
.active {
	border-bottom: 4px solid currentColor; /*no*/
	color: #EEAB5D;
}
.artical_cont {
	margin: 16px 16px 0;
	border: 1px solid $shallow_silver;
	box-shadow: 0 0 0 0, 
		0 0 0 0, 
		0 2px 3px -2px currentColor,
		0 0 0 0; /*no*/
}
.overview {
	position: relative;
	padding: 16px;
}
.intro {
	font-size: 20px; /*no*/
	line-height: 28px;
	color: $shallow_black;
}
.like {
	margin: 22px 0 0;
	font-size: 0;
}
.view,
.liked {
	display: inline-block;
	width: 64px;
	height: 20px;
	border-radius: 2px; /*no*/
	background: $_yellow;
}
.view {
	margin-right: 11px;
}
.time {
	position: absolute;
	line-height: 20px;
	bottom: 16px;
	right: 16px;
	font-size: 12px; /*no*/
	color: #999999;
}
.item {
	width: 80px;
	display: inline-block;
	font-size: 14px;
	color: #666666;
	text-align: center;
	span {
		display: inline-block;
		padding: 0 5px; /*no*/
		line-height: 44px;
	}
}
</style>
