<template>
    <section class="portfolio">
        <div class="page-header">
            <h1 class="page-title">
            My <span class="branded-text">Porfolio</span>
            </h1>
        </div>
        <div class="porfolio-container">
           <div v-for="n in 5" :key="n">
               <img src="/img/portfolio-related01.jpg" alt="">
           </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.portfolio {
  padding: 8rem 9.3rem;

  .page-header {
      margin-bottom: 2.26rem;
      h1 {
        font-size: 1.37rem;
        line-height: 1.62rem;
        margin-top: 0;
        margin-bottom: 2.26rem;
        text-transform: uppercase;
      }
  }
  .porfolio-container {
      display: flex;
      flex-wrap: nowrap;
    
      div {
        width: 20%;
        padding: 25px;
        flex-basis: 10%;
      }
  }

}
</style>
