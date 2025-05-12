<template>
    <section class="tools-section">
      <div class="section-header container">
        <h2>Workflow & Tools</h2>
        <p>
          Ik maak gebruik van moderne tools en development workflows om projecten efficiënt,
          schaalbaar en gestructureerd te houden. Van versiebeheer tot automatisering,
          ik ben vertrouwd met tools die het verschil maken in professionele omgevingen.
        </p>
      </div>
  
      <div class="marquee">
        <div class="marquee-track">
          <div class="tool-name" v-for="tool in repeatedTools" :key="tool + Math.random()">
            {{ tool }}
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
   const tools = [
  // Frontend frameworks & tools
  'Nuxt', 'Next', 'Vue', 'React', 'jQuery', 'SCSS', 'TailwindCSS', 'UnoCSS', 'Bootstrap', 'Vuetify', 'I18n',

  // Backend & API
  'Express.js', 'Fastify', 'JWT', 'Passport.js', 'Multer', 'Socket.io', 'Nodemailer', 'dotenv', 'CORS', 'Cron Jobs',

  // WordPress & custom
  'GSAP', 'Lenis', 'Vite', 'Matters.js', 'Tree.js', 'Axios', 'WordPress', 'WooCommerce', 'Elementor', 'ACF', 'WPML', 'Yoast SEO',

  // Databases
  'MongoDB', 'Mongoose', 'Directus', 'Redis',

  // UI/UX & design
  'Figma', 'Adobe XD',

  // Graphic & video
  'Photoshop', 'Illustrator', 'InDesign', 'Premiere', 'After Effects',

  // Mobile & AI
  'Flutter', 'Dart', 'Python', 'FastAPI',

  // General languages & tools
  'JavaScript', 'TypeScript', 'PHP', 'C++', 'Git', 'GitHub', 'Docker', 'Pug.js', 'Gulp.js', 'WSL', 'Swagger', 'Prettier', 'ESLint', 'Trello', 'Notion', 'Postman', 'Cloudflare'
]
const repeatedTools = [...tools, ...tools, ...tools]
  </script>
  
  <style scoped>
  .tools-section {
    min-height: 50vh;
    background-color: #FFFBF0;
display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 0;
    overflow: hidden;
  }
  
  .section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 2rem;
  }
  
  .marquee {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  
  .marquee-track {
    display: flex;
    width: fit-content;
    animation: scroll-left 90s linear infinite;
  }
  
  .tool-name {
    flex: 0 0 auto;
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: 500;
    color: #2e2e2e;
    white-space: nowrap;
  }
  
  @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-33.333%);
    }
  }
  </style>
  