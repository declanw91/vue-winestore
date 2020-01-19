<template>
    <div>Wine</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(
      ['whites', 'reds']
    )
  },
  methods: {

  }
}
</script>
