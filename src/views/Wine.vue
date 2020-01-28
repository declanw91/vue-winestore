<template>
    <div>
      <h1>Wines from {{ region }}</h1>
      <b-table striped hover :items="regionWines" :fields="fields">
        <template v-slot:cell(Price)="data">
            &pound;{{ data.value }}
          </template>
          <template v-slot:cell(Id)="data">
            <b-icon icon="plus" v-b-modal.cartModal :data-id="data.value"></b-icon>
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
      regionWines: [],
      region: '',
      fields: ['Name', 'Colour', 'Region', 'Price', 'Year', 'Id']
    }
  },
  computed: {
    ...mapState(
      ['whiteWines', 'redWines', 'wines']
    )
  },
  methods: {
    ...mapActions(
      ['addToCart']
    ),
    addWineToCart: function (id) {
      const wine = this.redWines.filter(function (item) {
        return item.Id === id
      })
      if (wine.length > 0) {
        const payload = { quantity: 1, price: wine[0].Price }
        this.addToCart(payload)
      }
    }
  },
  mounted () {
    var wineRegion = this.$route.params.region.charAt(0).toUpperCase() + this.$route.params.region.slice(1)
    this.region = wineRegion
    const wines = this.wines.filter(function (item) {
      return item.Region === wineRegion
    })
    this.regionWines = wines
  }
}
</script>
