<template>
  <div>
    <MobileMenu 
    v-if="getSignalMenu" 
    class="animated" 
    :class="{'slideInLeft': getSignalMenu}"
    @menuSignalOff="revertMenuIcon($event)">
    </MobileMenu>
    <Nav @menuSignal="getSignalMenu = $event" :menuRevertBack="menuSignal"></Nav>
    <!-- <SideContact v-if="getSignal"></SideContact> -->
    <nuxt class=""/>
    <!-- <Fab @toggleSideContact="getSignal = $event"></Fab>  -->
  </div>
</template>
<script>
// import Fab from '~/components/fab.vue'
// import SideContact from '~/components/sideContact.vue'
import MobileMenu from '~/components/mobileMenu.vue'
import Nav from '~/components/nav.vue'

export default {
  data () {
    return {
      getSignalMenu: false,
      menuSignal: true
    }
  },
  components: {
    MobileMenu,
    Nav
  },
  methods: {
    revertMenuIcon (value) {
      if (value === false) {
        this.getSignalMenu = false
      }
    }
  },
  watch: {
    getSignalMenu: function () {
      if (this.getSignalMenu === false) {
        this.menuSignal = !this.menuSignal
      }
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
