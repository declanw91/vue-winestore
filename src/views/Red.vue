<template>
    <div>
        <h1>Our Red Wine Selection</h1>
        <b-table striped hover :items="reds"></b-table>
    </div>
</template>

<script>
import reds from '../data/red'
export default {
  data () {
    return {
      reds
    }
  }
}
</script>
