<template>
<b-modal id="cartQuantityModal" title="Add to Cart" @ok="addToCart">
  <b-form>
    <b-form-group id="input-group-2" label="Quantity:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="selectedQuantity"
        required
        placeholder="Enter quantity"
        type="number"
        min="1"
      ></b-form-input>
    </b-form-group>
  </b-form>
</b-modal>
</template>

<script>
export default {
  props: [
    'addToCart',
    'selectedQuantity'
  ]
}
</script>
