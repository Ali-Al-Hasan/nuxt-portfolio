<template>
  <section class="contact-section container">
    <div class="contact-grid">
      <div class="contact-info">
        <div class="contact-info-inner">
          <h3>Volg mij</h3>
          <p>
            Wil je samenwerken aan een creatief project, heb je een interessant idee, of gewoon zin in een gesprek over design en technologie?<br />
            Laat van je horen via één van de onderstaande platforms.
          </p>
          <div class="social-links">
            <a href="https://github.com/Ali-Al-Hasan" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.behance.net/ZiouxV" target="_blank" rel="noopener">Behance</a>
          </div>
        </div>
      </div>

      <div class="contact-form-wrapper">
        <h2>Neem contact op</h2>
        <p>Heb je een vraag, idee of project? Vul het formulier in en je bericht wordt rechtstreeks naar ons e-mailadres gestuurd.</p>
        <form class="contact-form" action="https://formsubmit.co/techubhq@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Naam" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea name="message" placeholder="Bericht" rows="5" required></textarea>
          <button type="submit">Versturen</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-section {
  padding: 4rem 1rem;
}

.contact-grid {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

.contact-info,
.contact-form-wrapper {
  flex: 1 1 100%;
  min-width: 300px;
}

@media (min-width: 768px) {
  .contact-info,
  .contact-form-wrapper {
    flex: 1 1 45%;
  }
}

.contact-info {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.contact-info-inner {
  max-width: 500px;
  text-align: center;
}

.contact-info h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.contact-info p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-links a {
  color: #ff5c00;
  text-decoration: none;
  font-weight: bold;
}

.social-links a:hover {
  text-decoration: underline;
}

.contact-form-wrapper {
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  background: #fff;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
  width: 100%;
  background-color: #fff;
  transition: border-color 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #ff5c00;
}

.contact-form button {
  padding: 1rem;
  background-color: #ff5c00;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #7b4c2e;
}
</style>
