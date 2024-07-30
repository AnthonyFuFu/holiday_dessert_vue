<template>
    <Header />
    <div>
      <h1>這是首頁</h1>
      <button @click="showAlert">Show Alert</button>
      <p>歡迎來到首頁！</p>
    </div>
    <Footer />
  </template>
  
  <script>
  import '@/assets/plugins/sweetalert/sweetalert.css'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
  name: 'index', // 使用多單詞名稱以符合 vue/multi-word-component-names
  components: {
    Header,
    Footer
  }
}
  </script>
  <style scoped>
  h1 {
    color: #333;
  }
  p {
    font-size: 18px;
  }
  </style>