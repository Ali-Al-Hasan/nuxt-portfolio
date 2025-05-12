<template>
  <div class="error-page">
    <div class="error-code">404</div>
    <div class="error-content">
      <p>{{ error.message }}</p>
      <button type="button" class="button" @click="goHome">
        Ga terug naar de homepage
       
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(['error'])

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  padding: 2rem;

  .error-code {
    position: absolute;
    font-size: 15rem;
    opacity: 0.05;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    user-select: none;
    font-weight: 700;
  }

  .error-content {
    position: relative;
    z-index: 2;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    /* .back-home {
      display: inline-block;
      padding: 1rem 2rem;
      // border-radius: $radius;
      background-color: rgba(0, 0, 0, 0.05);
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease;
    } */

    .back-home:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>