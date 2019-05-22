<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Profile</router-link>|
      <router-link to="/list">List</router-link>|
      <router-link to="/form">Form</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}
#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
input {
  height: 20px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  min-width: 250px;
}

button {
  padding: 5px 10px;
  margin: 5px 0;
}
</style>
