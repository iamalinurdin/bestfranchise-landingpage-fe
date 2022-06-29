<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <component :is="this.$route.meta.layout">
      <router-view/>
    </component>
  </div>
</template>

<style>
:root {
  --font-size-responsive-md: 2em;
  --font-size-responsive-sm: 3em;
}
/* #app {
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
} */

.navbar-nav > .nav-item > a.nav-link.router-link-exact-active {
  color: #0d6efd;
  font-weight: 500;
}
</style>
