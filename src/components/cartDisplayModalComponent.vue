<template>
<b-modal id="cartDisplayModal" title="My Cart" ok-only>
  <div id="cartItemsWrapper">
    <h5>Your Cart Items</h5>
    <div class="cartItemWrapper row" v-for="(item, index) in cartItems" v-bind:key="index">
      <div class="col-2 text-center" >
        <font-awesome-icon icon="wine-glass-alt" />
      </div>
      <div class="col-9">
        <div class="row">
          <span class="mr-2 col-9">{{ item.Name }}</span>
          <span class="mr-2 col-2">&pound;{{ item.Price }}</span>
        </div>
      </div>
    </div>
  </div>
  <div id="cartTotal" class="mt-3 text-right"><h5>Cart Total: &pound;{{ cartTotal }}</h5></div>
</b-modal>
</template>

<script>
export default {
  props: [
    'cartItems',
    'cartTotal'
  ]
}
</script>
