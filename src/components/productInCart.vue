<template>
	<div class="product-inCart">
		<div class="top-side">
			<h3>{{ transferValuee.name }}</h3>
			<div>
				<span>${{ itemtotalcoast }}</span>
				<h4>${{ transferValuee.price }}</h4>
			</div>
		</div>
		<div class="bottom-side">
			<span>{{ transferValuee.name }}</span>
			<div class="increase-delete-btns">
				<div class="select-qt">
					<button
						class="increase-btn"
						@click="
							$emit('changeCount', {
								id: transferValuee.id,
								data: false,
							})
						"
					>
						-
					</button>
					<input class="qt-input" v-model="transferValuee.qt" type="number">
					<button
						class="increase-btn"
						@click="
							$emit('changeCount', {
								id: transferValuee.id,
								data: true,
							})
						"
					>
						+
					</button>
				</div>
				<span
					class="delete-btn"
					@click="$emit('deleteItem', transferValuee.id)"
					>X
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'productInCart',
	props: ['transferValuee'],
	computed: {
		itemtotalcoast() {
			return this.transferValuee.qt * this.transferValuee.price
		}
	}
};
</script>

<style></style>
