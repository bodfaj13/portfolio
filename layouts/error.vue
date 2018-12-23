<template>
  <div class="pageNotFound">
    <div class="img-holder">
      <img src="/img/404.svg" alt="">
    </div>
    <div class="goBack">
      <h1>Page Not Found!</h1>
      <nuxt-link to="/">
        <span>Go Back Home</span>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pageNotFound {
  display: flex;
  align-items: center;
	padding: 8rem 12.5rem;
  flex-direction: column;

  .img-holder { 

    img {
      min-height: 12rem;
      max-height: 12rem;
      min-width: 12rem;
      max-width: 12rem;
    }
  }

  .goBack {
    text-align: center;

    a {
      text-decoration: none;
      color: #4CAF50;
      font-size: 1.2rem;
    }
  }
}
@media only screen and (max-width: 600px) {
  .pageNotFound {
		padding: 7rem 2rem;
  }
}
</style>
