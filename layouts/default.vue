<template>
  <div>
    <!-- <SideContact v-if="getSignal"></SideContact> -->
    <nuxt class=""/>
    <!-- <Fab @toggleSideContact="getSignal = $event"></Fab>  -->
  </div>
</template>
<script>
import Fab from '~/components/fab.vue'
import SideContact from '~/components/sideContact.vue'
// import axios from 'axios'

export default {
  data () {
    return {
      getSignal: false
    }
  },
  components: {
    Fab,
    SideContact 
  },
  watch: {
    getSignal: function (val) {
      this.getSignal = val
    }
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
/* .overlay {
  background: rgba(0,0,0,.5);
} */
</style>
