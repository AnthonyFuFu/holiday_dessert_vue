<template>
  <!-- 全域用 -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/index">index</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  /*10px*/
  /*變數的寫法*/
  --page-width: 1500px;
  --bg-color: rgb(199, 199, 199);
  text-align: center;
}

body {
  margin: 0;
}
</style>
