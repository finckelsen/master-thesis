<template>
  <footer>
    <div class="footer-container">
      <h2>Email: <a href="mailto:casper@finckelsen.com">casper@finckelsen.com</a></h2>
      <a href="https://www.linkedin.com/in/casper-finckelsen/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  serverPrefetch() {
    return Promise.resolve(); // Can be used to fetch data if needed
  },
};
</script>