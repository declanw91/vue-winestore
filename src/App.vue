<template>
  <div id="app">
    <div id="nav" class="row">
      <div id="logo" class="col-2">
        <img src="/images/wineLogo.png" alt="logo" width="50"/>
        <span>Shalom Wines</span>
      </div>
      <div id="navLinks" class="col-8">
        <router-link to="/">Home</router-link> |
        <router-link to="/red">Red</router-link> |
        <router-link to="/white">White</router-link> |
        <router-link to="/rose">Rose</router-link> |
        <router-link to="/fullrange">Full Wine Range</router-link>
      </div>
      <div id="cartTotals" class="col-2">
        <span class="text-white">{{ cartCount }} Item(s) (&pound;{{ cartTotal }})</span>
      </div>
    </div>
    <b-container id="pageWrapper" class="pt-2">
      <router-view/>
    </b-container>
    <b-modal id="cartModal" title="Add to Cart" @ok="addWineToCart">
      <b-form>
      <b-form-group id="input-group-2" label="Quantity:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="selectedWineQuantity"
          required
          placeholder="Enter quantity"
          type="number"
          min="0"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      selectedWineQuantity: 0
    }
  },
  computed: {
    ...mapState(
      ['cartTotal', 'cartCount']
    )
  },
  methods: {
    addWineToCart: function () {}
  }
}
</script>

<style>
body {
  background-image: linear-gradient(45deg, #cccccc 25%, #dbdbdb 25%, #dbdbdb 50%, #cccccc 50%, #cccccc 75%, #dbdbdb 75%, #dbdbdb 100%);
  background-size: 28.28px 28.28px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: #a6a6a6;
}

#nav a {
  font-weight: bold;
  color: #FFFFFF;
}

#nav a.router-link-exact-active {
  color: #FFFFFF;
}

#logo {
  color: #FFFFFF;
}

#navLinks, #cartTotals {
  padding-top: 10px;
}

table {
  background: #ffffff;
}
</style>
