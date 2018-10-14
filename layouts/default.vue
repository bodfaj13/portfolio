<template>
  <div>
    <!-- <SideContact></SideContact> -->
    <nuxt/>
    <!-- <Fab></Fab> -->
  </div>
</template>
<script>
import Fab from '~/components/fab.vue'
import SideContact from '~/components/sideContact.vue'

export default {
  components: {
    Fab,
    SideContact
  }
}
</script>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.branded-text {
  color: #4CAF50;
}
.clear {
  clear: both;
}
.homepage, .about, .contact, .portfolio, .skills{
  background: #ccc;
}
</style>
