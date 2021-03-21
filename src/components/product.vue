<template>
	<div @click="$emit('pushTocart', transferValue.id)">
		<strong class="qt">{{ transferValue.qt }}</strong>
		<span class="typename">{{ transferValue.name }}</span>
		<span class="price">{{ transferValue.price }} сум</span>
	</div>
</template>

<script>
export default {
	name: 'productComponent',
	props: ['transferValue'],
};
</script>

<style></style>
