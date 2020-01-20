<template>
    <div>
      <h1>Wines from {{ region }}</h1>
      <b-table striped hover :items="regionWines">
        </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      regionWines: [],
      region: ''
    }
  },
  computed: {
    ...mapState(
      ['whiteWines', 'redWines', 'wines']
    )
  },
  methods: {

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
