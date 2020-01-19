<template>
    <div>
        <h1>Our Full Wine Selection</h1>
        <b-table striped hover :items="wines">
        </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(
      ['wines']
    )
  }
}
</script>
