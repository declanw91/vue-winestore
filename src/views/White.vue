<template>
    <div>
        <h1>Our White Wine Selection</h1>
        <b-table striped hover :items="whites"></b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(
      ['whites']
    )
  }
}
</script>
