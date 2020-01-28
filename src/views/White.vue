<template>
    <div>
        <h1>Our White Wine Selection</h1>
        <b-table striped hover :items="whiteWines" :fields="fields">
          <template v-slot:cell(Price)="data">
            &pound;{{ data.value }}
          </template>
          <template v-slot:cell(Id)="data">
            <b-icon icon="plus" @click="addWineToCart(data.value)"></b-icon>
          </template>
          <template v-slot:head(Id)="data">
            <span class="text-info" :data-name="data.value"> </span>
          </template>
        </b-table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      fields: ['Name', 'Colour', 'Region', 'Price', 'Year', 'Id']
    }
  },
  computed: {
    ...mapState(
      ['whiteWines', 'selectedWine']
    )
  },
  methods: {
    ...mapActions(
      ['addToCart', 'updateSelectedWine']
    ),
    addWineToCart: function (id) {
      const wine = this.whiteWines.filter(function (item) {
        return item.Id === id
      })
      if (wine.length > 0) {
        const payload = { wine: wine[0] }
        this.updateSelectedWine(payload)
        this.$bvModal.show('cartModal')
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
