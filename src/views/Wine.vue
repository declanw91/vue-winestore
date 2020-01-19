<template>
    <div>Wine</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(
      ['whiteWines', 'redWines']
    )
  },
  methods: {

  }
}
</script>
