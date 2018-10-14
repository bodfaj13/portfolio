<template>
  <div>
    <Nav></Nav>
    <about class="about"></about>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
import About from '~/components/about/index.vue'

export default {
  components: {
    Nav,
    About
  }
}
</script>

<style scoped>
</style>
