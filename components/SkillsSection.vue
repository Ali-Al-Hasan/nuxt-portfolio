<template>
    <section class="skills-section container">
      <h2 class="section-title">Vaardigheden</h2>
  
      <div class="skills-grid">
        <div class="skill-card" v-for="skill in skills" :key="skill.title">
          <div class="skill-image">
  <img :src="skill.image" :alt="skill.title" loading="lazy"/>
</div>
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.description }}</p>
          <ul>
            <li v-for="item in skill.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import webdesign from '@/assets/img/webdesign.webp'
import webdevelopment from '@/assets/img/webdevelopment.webp'
import wordpress from '@/assets/img/wordpress.webp'
import db from '@/assets/img/db.webp'
import uxui from '@/assets/img/ux-ui.webp'
import designvideo from '@/assets/img/design-and-videos.webp'
import mobileai from '@/assets/img/mobile-and-ai.webp'
import coding from '@/assets/img/coding.webp'
  const skills = [
  {
    title: 'Webdesign',
    description: 'Moderne front-end met frameworks en CSS tools.',
    image: webdesign,
    items: ['Nuxt', 'Next', 'Vue', 'React', 'jQuery', 'SCSS', 'TailwindCSS', 'UnoCSS'],
  },
  {
    title: 'Webontwikkeling (Back-End)',
    description: 'API’s en servers met moderne tools.',
    image: webdevelopment,
    items: ['Express.js', 'Fastify', 'JWT', 'Passport.js', 'Multer', 'Socket.io', 'Nodemailer', 'dotenv', 'CORS', 'Cron Jobs'],
  },
  {
    title: 'Custom Front & WordPress',
    description: 'Interactieve front-end, GSAP animaties en WordPress plugins.',
    image: wordpress,
    items: ['Axios','Bootstrap', 'Vuetify','I18n', 'GSAP', 'Lenis', 'Vite', 'Matters.js', 'Tree.js', 'WordPress', 'WooCommerce', 'Elementor', 'ACF', 'WPML', 'Yoast SEO', 'WordPress REST API'],
  },
  {
    title: 'Databases',
    description: 'Opslag en beheer van data.',
    image: db,
    items: ['MongoDB', 'Mongoose', 'Directus', 'Prisma'],
  },
  {
    title: 'UI / UX Design',
    description: 'Visueel ontwerp en gebruikerservaring.',
    image: uxui,
    items: ['Figma', 'Adobe XD'],
  },
  {
    title: 'Grafisch & Video',
    description: 'Creatie van visuals en video content.',
    image: designvideo,
    items: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere', 'After Effects'],
  },
  {
    title: 'Mobiel & AI (in progress)',
    description: 'Huidige focus op nieuwe technologieën.',
    image: mobileai,
    items: ['Flutter', 'Dart', 'Python', 'FastAPI'],
  },
  {
    title: 'Talen & Tools',
    description: 'Continue ontwikkeling in diverse talen.',
    image: coding,
    items: ['JavaScript (goed)', 'PHP / TS / Dart (gemiddeld)', 'Python / C++ (basis)'],
  },
]


  </script>
  