<template>
  <div id="app">
    <div id="nav" class="row">
      <div id="logo" class="col-2">
        <p>Shalom Wines</p>
      </div>
      <div id="navLinks" class="col-8">
        <router-link to="/">Home</router-link> |
        <router-link to="/red">Red</router-link> |
        <router-link to="/white">White</router-link> |
        <router-link to="/rose">Rose</router-link> |
        <router-link to="/fullrange">Full Wine Range</router-link>
      </div>
    </div>
    <b-container id="pageWrapper" class="pt-2">
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
  background-color: #343a40;
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
</style>
