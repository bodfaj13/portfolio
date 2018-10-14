<template>
  <div>
    <Nav></Nav>
    <Contact class="contact"></Contact>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
import Contact from '~/components/contact/index.vue'

export default {
  components: {
    Nav,
    Contact
  }
}
</script>

<style scoped>
</style>
