<template>
	<div @click="$emit('pushTocart', transferValue.id)">
		<img src="" alt="" />
		<div class="main-info">
			<span class="typename">{{ transferValue.name }}</span>
			<strong class="qt">{{ transferValue.qt }}</strong>
		</div>
		<span class="price">${{ transferValue.price }}</span>
	</div>
</template>

<script>
export default {
	name: 'productComponent',
	props: ['transferValue'],
};
</script>

<style></style>
