<template>
  <div>
    <Nav></Nav>
    <homepage class="homepage"></homepage>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'
import Homepage from '~/components/homepage/index.vue'

export default {
  data () {
    return {
      showSideContact: false
    }
  },
  components: {
    Nav,
    Homepage
  }
}
</script>

<style>

</style>
