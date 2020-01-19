<template>
    <div>
        <h1>Our White Wine Selection</h1>
        <b-table striped hover :items="whites"></b-table>
    </div>
</template>

<script>
import whites from '../data/white'
export default {
  data () {
    return {
      whites
    }
  }
}
</script>
