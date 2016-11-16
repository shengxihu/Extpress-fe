<template>
	<div :class="$style.cont">
		<div :class="$style.artical_cont">
			<div :class="$style.img_cont">
				<img src="http://a.cphotos.bdimg.com/timg?image&quality=100&size=b4000_4000&sec=1479308824&di=496eed6a71a3856bb4a12352f530621b&src=http://file27.mafengwo.net/M00/B2/12/wKgB6lO0ahWAMhL8AAV1yBFJDJw20.jpeg">
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
.artical_cont {
	margin: 16px 16px 0;
	border: 1px solid $shallow_silver;
	box-shadow: 0 0 0 0, 
		0 0 0 0, 
		0 2px 3px -2px currentColor,
		0 0 0 0;
}
.overview {
	position: relative;
	padding: 16px;
}
.intro {
	font-size: 20px;
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
	border-radius: 2px;
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
	font-size: 12px;
	color: #999999;
}
</style>
