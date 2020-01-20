<template>
    <div>
        <h1>Our Full Wine Selection</h1>
        <b-table striped hover :items="wines" :fields="fields">
          <template v-slot:cell(Price)="data">
            &pound;{{ data.value }}
          </template>
        </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      fields: ['Name', 'Colour', 'Region', 'Price', 'Year']
    }
  },
  computed: {
    ...mapState(
      ['wines']
    )
  }
}
</script>
