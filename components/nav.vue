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
    </header> 
</template>
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
                align-self: center;
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
}
</style>
