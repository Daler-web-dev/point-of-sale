<template>
	<!-- heading -->
	<div class="store-app">
		<b-navbar type="dark" variant="dark">
			<b-navbar-nav>
				<!-- Navbar dropdowns -->
				<div class="nav-bar">
					<div class="search-inp">
						<b-nav-item href="#">Demo</b-nav-item>
						<h3>Категории</h3>
						<b-form-input
							v-model="widgets.text"
							placeholder="Что вы ищите?"
							class="search-input"
						></b-form-input>
						<b-button variant="secondary">Search</b-button>
						<div
							class="head-center"
							:class="{ qtWidgetOn: widgets.quantityWidget == true }"
						>
							<strong>{{ widgets.trnafervalue.name }}</strong>
							<div class="select-qt">
								<button
									@click="
										changeCount({
											id: widgets.trnafervalue.id,
											data: false,
										})
									"
								>
									-
								</button>
								<span>{{ widgets.trnafervalue.qt }}</span>
								<button
									@click="
										changeCount({
											id: widgets.trnafervalue.id,
											data: true,
										})
									"
								>
									+
								</button>
							</div>
					</div>
					</div>
					<b-nav-item-dropdown text="User" right>
						<b-dropdown-item href="#">Account</b-dropdown-item>
						<b-dropdown-item href="#">Settings</b-dropdown-item>
					</b-nav-item-dropdown>
				</div>
			</b-navbar-nav>
		</b-navbar>

		<div class="nav-bar-left">
			<div class="links">
				<a href="">
					home
				</a>
				<a href="">
					home
				</a>
				<a href="">
					home
				</a>
			</div>
		</div>

		<div class="main-block">
			<div class="static-place">
				<!-- фильтры -->
				<div class="filter">
					<span>isolution</span>
				</div>
				<div class="filter">
					<span>Lorem, ipsum.</span>
				</div>
				<div class="filter">
					<span>cool</span>
				</div>
				<div class="filter">
					<span>hollywood</span>
				</div>
				<div class="filter">
					<span>nonon</span>
				</div>
				<div class="filter">
					<span>anything</span>
				</div>
				<div class="filter">
					<span>hollywood</span>
				</div>
				<div class="filter">
					<span>nonon</span>
				</div>
				<div class="filter">
					<span>anything</span>
				</div>
			</div>
			<div class="static-place">
				<!-- продукты -->
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
			<div class="cart-site">
				<span>Корзина</span>
				<div class="products-place">
					<cartImg
						src="/src/assets/img/icons/shopping-cart.svg"
						class="temporery-img"
						v-if="selectedProducts.length == 0"
					/>
					<productInCart
						v-for="item2 of selectedProducts"
						:key="item2.id"
						:transferValuee="item2"
						@deleteItem="deleteItem"
						@changeCount="changeCount"
					/>
				</div>
				<button class="card-btn">
					всего к оплате {{ cartTotalCost }} сум
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import productComponent from './components/product.vue';
import productInCart from './components/productInCart';
import cartImg from './components/cartImg';

export default {
	data() {
		return {
			productArr: [
				{
					id: Math.random(),
					name: 'opalDam Dam',
					price: 10000,
					qt: 0,
					productIsActive: false,
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
				},
			],
			selectedProducts: [],
			widgets: {
				quantityWidget: false,
				trnafervalue: 0,
				text: ''	
			},
		};
	},
	methods: {
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
	},
	computed: {
		cartTotalCost() {
			return this.selectedProducts.reduce(
				(total, item) => total + item.price * item.qt,
				0
			);
		},
	},
	components: {
		productComponent,
		productInCart,
		cartImg
	},
};
</script>

<style>
@import '../styles/scss/pages/home.scss';
</style>
