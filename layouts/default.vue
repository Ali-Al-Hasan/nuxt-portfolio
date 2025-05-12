<!-- layouts/default.vue -->
<template>
    <div class="layout">
  
        <Header />
    
 
      
      <main>
        <slot />
      </main>
      
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  <style scoped lang="scss">
    main{
      min-height: 90vh;
    }
  </style>