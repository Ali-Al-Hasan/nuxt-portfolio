<template>
    <footer class="site-footer">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} Ali.dev – Alle rechten voorbehouden</p>
              </div>
    </footer>
  </template>
  <style scoped>
    .site-footer {
      background-color: #FFFBF0;
      width: 100%;
      padding: 1rem 0;
      text-align: center;
    }

    .container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      margin: 0;
      font-size: 1rem;
    }
  </style>