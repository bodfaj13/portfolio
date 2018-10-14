<template>
  <div>
    <Nav></Nav>
    <Skills class="skills"></Skills>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
import Skills from '~/components/skills/index.vue'

export default {
  components: {
    Nav,
    Skills
  }
}
</script>

<style scoped>
</style>
