<template>
  <section class="first-section">
    <div class="hero-section container">
      <div class="hero-wrapper">
        <div class="hero-text">
          <h1>Hi, ik ben Ali</h1>
          <p>
  Ik bouw moderne en performante webapplicaties met oog voor detail en gebruiksvriendelijkheid.  
  Van strakke interfaces tot efficiënte backends, ik zorg ervoor dat elke lijn code bijdraagt aan een vloeiende en intuïtieve gebruikerservaring.
</p>

<a href="/CV.pdf" target="_blank" class="cv-btn">Bekijk CV</a>      </div>
  
        <div class="hero-image">
            <img class="masked-image "
  style=" object-fit: cover"
  src="../assets/img/hero-picture.webp"
  loading="lazy"
    alt="img"
/>
        </div>
      </div>
    </div>
  </section>
   
  </template>
  
  <script setup>

  </script>
 <style scoped>
 .first-section {
    background-color: #FFFBF0;
  }
  .cv-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 12px;
  
    font-size: 1rem;
    font-weight: 500;
    background-color: #ff5c00;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .cv-btn:hover{
    background-color: #7b4c2e;

  }
 </style>