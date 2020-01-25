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
    </div>
    <b-container id="pageWrapper" class="pt-2">
      <router-view/>
    </b-container>
  </div>
</template>

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

#navLinks {
  padding-top: 10px;
}

table {
  background: #ffffff;
}
</style>
