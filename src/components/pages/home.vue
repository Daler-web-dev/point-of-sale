<template>
	<div>
		<div v-for="item of todos" :key="item.key">
			<!-- <p>{{ item.title }}</p> -->
			<input type="text" v-model="item.title">
			<!-- <button>Удалить</button> -->
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'todos'
		])
	},
	methods: {
		...mapActions([
			'getData'
		])
	},
	created() {
		this.getData()
		console.log('Я загружаюсь и получаю данные')
	},
	mounted() {
		console.log('Я загрузился и готов к работе')
	}
}
</script>

<style>

</style>