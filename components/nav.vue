<template>
    <header class="nav">
        <div class="nav-title">
            <nuxt-link to="/"><h1>JIBO</h1></nuxt-link>
        </div>
        <div class="nav-menu">
            <ul>
                <li class="active">
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/skills">Skills</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/portfolio">Portfolio</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="nav-mobile" 
          @click="toggleMenuIcon" 
          :class="{'change': menuToggleIcon}">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
    </header> 
</template>
<script>
export default {
  data () {
    return {
      menuToggleIcon: false
    }
  },
  methods: {
    toggleMenuIcon () {
      this.menuToggleIcon = !this.menuToggleIcon
      this.$emit('menuSignal', this.menuToggleIcon)
    }
  },
  props: {
    'menuRevertBack': {
      type: Boolean
    }
  },
  watch: {
    menuRevertBack: function () {
      if (!this.menuRevertBack) {
        this.menuToggleIcon = false
      } else {
        this.menuToggleIcon = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    box-shadow: 0 3px 12px rgba(0,0,0,0.16), 0 3px 12px rgba(0,0,0,0.23);
    flex-wrap: wrap;
    align-items: center;
    position: fixed;
    background: #fff;
    width: 100%;
    z-index: 1000;
    justify-content: space-around;

    .nav-title {
      a {
          text-decoration: none;
          color: #000;


          h1{
              width: 30%;
              padding: 1rem 2.2rem;
              // align-self: center;
              text-transform: uppercase;
              text-decoration: none;
          }
      }
    }
    
    .nav-menu {
        width: 70%;
        padding-right: 2.2rem;

        ul {
            display: flex;
            justify-content: flex-end;
            
            li {
                list-style-type: none;
                a {
                    padding: 0.6rem 0.6rem;
                    font-size: 1.2rem;
                    margin-bottom: 0;
                    margin-left: 10px;
                    color: #000;
                    transition-property: margin-bottom;
                    // transition-duration: 0.3s;
                    text-decoration: none;
                    color: #000;
                }

                a:hover {
                    color: #4CAF50;
                }

                a.nuxt-link-exact-active {
                    color: #4CAF50;
                }
            }
        }
    }

    .nav-mobile {
      display: inline-block;
      cursor: pointer;
      margin-right: -5.5rem;

      .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
      }
    }
    // .change {
    //   display: inline-block;
    //   cursor: pointer;
    //   margin-right: -5.5rem;
    // }
    .change .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }

    .change .bar2 {opacity: 0;}

    .change .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
}
@media only screen and (max-width: 600px) {
  .nav {
    .nav-title {
      a {
        h1 {
          margin-left: -8rem;
        }
      }
    }
    .nav-menu {
      display: none;
    }
    .nav-mobile {
      margin-right: -5.5rem;
    }
    .change {
      margin-right: -5.5rem;
    }
  }
}

@media only screen and (min-width: 600px) and (max-width: 992px) {

}
@media only screen and (min-width: 993px) {
  .nav {
    .nav-mobile, .change {
      display: none;
    }
  }
}
</style>
