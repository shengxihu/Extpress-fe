<template>
	<div :class="$style.recommend">
		<div class="item">
			<div class="course">
				<h2>标题</h2>
				<div>
					<span>备注</span>
					<div class="info">
						<div class="comment">
							<span class="icon"></span>
							<span class="count">{{ count }}</span>
							<button @click="increment">+</button>
    						<button @click="decrement">-</button>
						</div>
						<div class="like">
							<span class="icon"></span>
							<span class="count">99+</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'count'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

<style lang='sass' module>
@import '../../assets/value.scss';
.recommend {

}
</style>
