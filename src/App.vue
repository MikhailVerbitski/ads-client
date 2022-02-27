<template>
  <div class="main-color">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* { padding: 0; margin: 0; }

.light {
  --color-primary: white;
  --color-secondary: #d9d9d99e;
  --color-accent: #F8F9FA;
  --font-color: #000000;
  --second-font-color: #343a40;
}
.dark {
  --color-primary: #181818;
  --color-secondary: #2a2c2d;
  --color-accent: #212121;
  --font-color: #ffffff;
  --second-font-color: #bac9d8;
}
.main-color {
  background-color: var(--color-primary);
}
.second-color {
  background-color: var(--color-secondary);
}
.site-panel-color {
  background-color: var(--color-accent);
}
* {
  color: var(--font-color);
}
nav * {
  color: var(--font-color) !important;
}
.text-dark {
  color: var(--second-font-color) !important;
}
a.text-dark:hover, a.text-dark:focus {
  color: var(--second-font-color) !important;
}
.dropdown-menu {
  background-color: var(--color-secondary);
}
.dropdown-item:hover {
  background-color: var(--color-primary);
}
</style>