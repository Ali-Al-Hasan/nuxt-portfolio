<template>
  <header class="site-header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
        <img src="../assets/img/logo.svg" alt="logo" width="80" loading="lazy"/>
        </NuxtLink>
      </div>

      <!-- <button
        class="menu-toggle responsive-only"
        @click="toggleMenu"
        aria-label="Menu Toggle"
      >
        <component :is="isOpen ? X : Menu" />
      </button> -->

      <nav class="side-menu" :class="{ open: isOpen }">
        <ul>
        <!--   <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/projects">Projecten</NuxtLink></li>
          <li><NuxtLink to="/about">Over mij</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
<style scoped lang="scss">
.site-header {
  background-color: #FFFBF0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 0;

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }

  .menu-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    display: none; // hidden by default

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 1023px) {
    .menu-toggle {
      display: block;
    }

    .side-menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      display: none;
      flex-direction: column;
      padding: 1rem;
    }

    .side-menu.open {
      display: flex;
    }
  }

  // Desktop styles
  @media (min-width: 1024px) {
    .side-menu {
      display: flex !important;
      position: static;
      flex-direction: row;
      gap: 1rem;

      ul {
        display: flex;
        gap: 1.5rem;
      }
    }
  }
}

</style>