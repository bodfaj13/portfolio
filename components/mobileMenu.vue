<template>
  <div class="menu-container" @click="menuOff">
    <div class="menu">
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
  </div>
</template>
<script>
export default {
  methods: {
    menuOff () {
      this.$emit('menuSignalOff', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-container {
    width: 200px;
    height: auto;
    overflow: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 9000;
    box-shadow: -2px 0 10px rgba(0,0,0,.4);
    transition: .25s;

    .menu {
      ul {
            display: flex;
            // justify-content: flex-end;
            flex-direction: column;
            padding-top:0.7rem;
            padding-left: 0.7rem;
            
            li {
                list-style-type: none;
                margin-bottom: 0.7rem;
                a {
                    font-size: 1.2rem;
                    color: #000;
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
}
</style>
