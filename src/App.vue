<template>
	<div class="store-app">
		<b-navbar toggleable="lg" type="black" variant="white" class="navbar">
			<b-navbar-brand href="#">Demo</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-form class="nav-form">
						<button class="btn-sm"
							><searchImg
						/></button>
						<b-form-input
							size="sm"
							class="mr-sm-2 nav-input"
							placeholder="Search"
						></b-form-input>
					</b-nav-form>

					<b-nav-item-dropdown right>
						<!-- Using 'button-content' slot -->
						<template #button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>

		<div class="main-block">
			<!-- фильтры -->
			<div class="categories-place">
				<h3>Категории</h3>
				<div class="filter" v-for="item of categories" :key="item.key">
					<span>{{ item.name }}</span>
				</div>
			</div>
			<!-- продукты -->
			<div class="static-place">
				<productComponent
					class="product-item"
					:class="{
						'product-is-active':
							widgets.trnafervalue.productIsActive === true,
					}"
					v-for="item of productArr"
					:key="item.id"
					:transferValue="item"
					@pushTocart="pushToCart"
				/>
			</div>
			<!-- cart -->
			<div class="cart">
				<div class="products-incart-place">
					<productInCart
						v-for="item2 of selectedProducts"
						:key="item2.id"
						:transferValuee="item2"
						@deleteItem="deleteItem"
						@changeCount="changeCount"
					/>
				</div>
				<b-button id="show-btn" class="b-btn" @click="showModal">
					<div class="card-btn">
						<span v-if="cartTotalCost === 0">Корзина путсая</span>
						<span v-if="cartTotalCost > 0"
							>всего к оплате {{ cartTotalCost }} сум</span
						>
					</div>
				</b-button>
			</div>
		</div>
		<!-- ------------modal payment options----------- -->
		<b-modal ref="my-modal" hide-footer>
			<div class="payment-options">
				<strong>Card</strong>
				<strong>Cash</strong>
				<strong>Split</strong>
				<strong @click="hideModal">Cancel</strong>
			</div>
		</b-modal>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import productComponent from './components/product.vue';
import productInCart from './components/productInCart';
import searchImg from './components/searchImg';

export default {
	data() {
		return {
			productArr: [
				{
					id: Math.random(),
					name: 'opalDam Dam',
					price: 15000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'ukol Dam',
					price: 20000,
					qt: 0,
					productIsActive: false,
				},
				{
					id: Math.random(),
					name: 'lopatka lopatka',
					price: 34000,
					qt: 0,
					productIsActive: false,
				},
				{
					id: Math.random(),
					name: 'masjina lopatka',
					price: 28000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'masjina lopatka',
					price: 11000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'masjina lopatka',
					price: 1000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'opalDam Dam',
					price: 33000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'ukol Dam',
					price: 25000,
					qt: 0,
					productIsActive: false,
				},
				{
					id: Math.random(),
					name: 'lopatka lopatka',
					price: 15000,
					qt: 0,
					productIsActive: false,
				},
				{
					id: Math.random(),
					name: 'masjina lopatka',
					price: 10000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'masjina lopatka',
					price: 10000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'masjina lopatka',
					price: 10000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'opalDam Dam',
					price: 10000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'ukol Dam',
					price: 10000,
					qt: 0,
					productIsActive: false,
				},
				{
					id: Math.random(),
					name: 'lopatka lopatka',
					price: 10000,
					qt: 0,
					productIsActive: false,
				},
				{
					id: Math.random(),
					name: 'masjina lopatka',
					price: 10000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'masjina lopatka',
					price: 10000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
				{
					id: Math.random(),
					name: 'masjina lopatka',
					price: 10000,
					qt: 0,
					productIsActive: false,
					typeof: 'isolution',
				},
			],
			selectedProducts: [],
			widgets: {
				quantityWidget: false,
				trnafervalue: 0,
				text: '',
			},
			categories: [
				{
					name: 'Cements',
				},
				{
					name: 'Isolation',
				},
				{
					name: 'Endodontic materials',
				},
				{
					name: 'Temporary Fillings',
				},
				{
					name: 'Acrylic resins',
				},
				{
					name: 'Topical Anesthetics',
				},
				{
					name: 'Composite resins',
				},
				{
					name: 'Glass ionomer cements',
				},
			],
		};
	},
	components: {
		productComponent,
		productInCart,
		searchImg,
	},
	computed: {
		cartTotalCost() {
			return this.selectedProducts.reduce(
				(total, item) => total + item.price * item.qt,
				0
			);
		},
	},
	methods: {
		showModal() {
			this.$refs['my-modal'].show();
		},
		hideModal() {
			this.$refs['my-modal'].hide();
		},
		pushToCart(data) {
			let foundProduct = this.productArr.find(
				(product) => product.id === data
			);
			// ищем одинковый объект, если он есть
			if (!this.selectedProducts.includes(foundProduct))
				this.selectedProducts.unshift(foundProduct);
			else {
				this.changeCount({ id: foundProduct.id, data: true });
			}
			this.widgets.trnafervalue = this.productArr.find(
				(product) => product.id === data
			);
			this.widgets.quantityWidget = true;
			this.productArr.find((product) => product.id === data);
		},
		changeCount(data) {
			let item = this.productArr.find(
				(product) => product.id === data.id
			);
			if (data.data) {
				item.qt++;
			}
			// если кол-во равна 0 то удаляем айтем
			else if (item.qt === 0) {
				this.selectedProducts.splice(
					this.productArr.find((product) => product.id === data.id),
					1
				);
				this.widgets.quantityWidget = false;
			} else {
				item.qt = Math.max(item.qt - 1, 0);
			}
		},
		deleteItem(data) {
			let item = this.selectedProducts.find(
				(product) => product.id === data
			);
			item.qt = 0;
			let index = this.selectedProducts.findIndex(
				(item) => item.id === data
			);
			this.selectedProducts.splice(index, 1);
		},
		filterProduct(data) {
			let staticPrArr = this.productArr;
			let loweredData = data.toLowerCase();

			if (loweredData === 'isolution') {
				staticPrArr = staticPrArr.filter(
					(item) => item.typeof == 'isolution'
				);
			} else if (loweredData === 'all') {
				console.log(staticPrArr);
			} else alert('sorry');
		},
	},
};
</script>

<style>
@import '../styles/scss/pages/home.scss';
</style>
