<template>
  <div>
    <Nav></Nav>
    <Portfolio class="portfolio"></Portfolio>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
import Portfolio from '~/components/portfolio/index.vue'

export default {
  components: {
    Nav,
    Portfolio
  }
}
</script>

<style scoped>
</style>
