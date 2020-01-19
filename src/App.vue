<template>
  <div id="app">
    <div id="nav" class="row">
      <div id="logo" class="col-2">
        Shalom Wines
      </div>
      <div id="navLinks" class="col-8">
        <router-link to="/">Home</router-link> |
        <router-link to="/red">Red</router-link> |
        <router-link to="/white">White</router-link> |
        <router-link to="/rose">Rose</router-link> |
        <router-link to="/fullrange">Full Wine Range</router-link>
      </div>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
