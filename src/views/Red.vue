<template>
    <div>
        <h1>Our Red Wine Selection</h1>
        <b-table striped hover :items="redWines">
        </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(
      ['redWines']
    )
  }
}
</script>
