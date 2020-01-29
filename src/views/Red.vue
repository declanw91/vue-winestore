<template>
    <div>
        <h1>Our Red Wine Selection</h1>
        <b-table striped hover :items="redWines" :fields="fields">
          <template v-slot:cell(Price)="data">
            &pound;{{ data.value }}
          </template>
          <template v-slot:cell(Id)="data">
           <span class="addToCartWrapper" @click="addWineToCart(data.value)"> <b-icon icon="plus" :data-id="data.value"></b-icon></span>
          </template>
          <template v-slot:head(Id)="data">
            <span class="text-info" :data-name="data.value"> </span>
          </template>
        </b-table>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      fields: ['Name', 'Colour', 'Region', 'Price', 'Year', 'Id']
    }
  },
  computed: {
    ...mapState(
      ['redWines', 'selectedId', 'selectedWine']
    )
  },
  methods: {
    ...mapActions(
      ['addToCart', 'updateSelectedWine']
    ),
    addWineToCart: function (id) {
      const wine = this.redWines.filter(function (item) {
        return item.Id === id
      })
      if (wine.length > 0) {
        const payload = { wine: wine[0] }
        this.updateSelectedWine(payload)
        this.$bvModal.show('cartQuantityModal')
      }
    }
  }
}
</script>

<style scoped>
  h1 {
    background: #FFFFFF;
  }
</style>
