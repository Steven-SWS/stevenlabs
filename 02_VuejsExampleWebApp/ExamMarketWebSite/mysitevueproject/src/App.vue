<template>
  <nav>
    <router-link to="/">Home</router-link><br>
    <router-link to="/databinding">DataBinding</router-link><br>
    <router-link to="/databinding-html">DataBinding - Html</router-link><br>
    <router-link to="/databinding-inputtext">DataBinding - InputText</router-link><br>
    <router-link to="/databinding-inputnumber">DataBinding - InputNumber</router-link><br>
    <router-link to="/databinding-textarea">DataBinding - Textarea</router-link><br>
    <router-link to="/databinding-selectoption">DataBinding - SelectOption</router-link><br>
    <router-link to="/databinding-inputcheckbox">DataBinding - InputCheckbox</router-link><br>
    <router-link to="/databinding-inputradio">DataBinding - InputRadio</router-link><br>
    <router-link to="/databinding-imagesrc">DataBinding - ImageSrc</router-link><br>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
