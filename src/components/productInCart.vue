<template>
    <div class="product-inCart">
        <div class="top-line">
            <h3>x {{transferValuee.qt}} </h3>
            <span>{{ transferValuee.name }}</span>
            <span>${{ transferValuee.price }}</span>
        </div>
        <div class="bottom-line">
            <div class="select-qt">
                <button class="increase-btn" @click="$emit('changeCount', {id: transferValuee.id, data: false})">-</button>
                <!-- <span>{{ transferValuee.qt }}</span> -->
                <button class="increase-btn" @click="$emit('changeCount',{id: transferValuee.id, data: true})">+</button>
            </div>
            <span>{{ transferValuee.name }}</span>
            <span class="delete-btn" @click="$emit('deleteItem', transferValuee.id)">delete</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productInCart',
    props: [
        'transferValuee',
    ]
}
</script>

<style>

</style>