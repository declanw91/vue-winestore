<template>
    <div>
      <h1>Wines from {{ region }}</h1>
      <b-table striped hover :items="regionWines" :fields="fields">
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
      ['addToCart', 'updateSelectedWine']
    ),
    addWineToCart: function (id) {
      const wine = this.regionWines.filter(function (item) {
        return item.Id === id
      })
      if (wine.length > 0) {
        const payload = { wine: wine[0] }
        this.updateSelectedWine(payload)
        this.$bvModal.show('cartQuantityModal')
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
