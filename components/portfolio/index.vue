<template>
    <section class="portfolio animated slideInUp">
        <div class="page-header">
            <h1 class="page-title">
            My <span class="branded-text">Porfolio</span>
            </h1>
        </div>
        <div class="porfolio-container">
           <div v-for="n in 6" :key="n" class="portfolio-item">
              <div class="item-img">
								 <img src="/img/portfolio-related01.jpg" alt="">
								 <span>The Website</span>
							</div>
							<div class="item-content">
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, dolorem assumenda  deserunt fuga. 
								</p>
							</div>
							<div class="item-action">
								<a href="" class="branded-text">http://localhost:3000/portfolio</a>
							</div>
           </div>
        </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      showcase: [
        {
          img: '/img/portfolio-related01.jpg',
          name: 'The Website',
          desc: 'Lorem ipsum dolor sit amet, ducimus! Tenetur, quae magni in voluptas optio quia.'
        },
        {
          img: '/img/portfolio-related01.jpg',
          name: 'The Website',
          desc: 'Lorem ipsum dolor sit amet, ducimus! Tenetur, quae magni in voluptas optio quia.'
        },
        {
          img: '/img/portfolio-related01.jpg',
          name: 'The Website',
          desc: 'Lorem ipsum dolor sit amet, ducimus! Tenetur, quae magni in voluptas optio quia.'
        }
      ]
    }
  }
}
</script>

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
    flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;

		.portfolio-item {
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
			background: #fff;
			margin-bottom: 0.6rem;
			flex-basis: 32%;
			

			.item-img {
				display: flex;
				flex-direction: column;
				cursor: pointer;

				img {
					position: relative;
					min-width: 100%;
					max-width: 100%;
					min-height: auto;
					max-height: auto;
				}

				span {
					padding: 10px;
					font-size: 24px;
    			font-weight: 300;
				}
			}

			.item-content {
				padding: 10px;
			}

			.item-action {
				border-top: 1px solid rgba(160,160,160,0.2);
    		padding: 10px;
				
				a {
					text-decoration: none;
					cursor: pointer;
				}
			}
		}

      
  }

}
@media only screen and (max-width: 600px) {
  .portfolio {
    padding: 7rem 1rem;

    .porfolio-container {
      .portfolio-item {
        flex-basis: 100%;
      }
    }
  }
}

@media only screen and (min-width: 600px) and (max-width: 992px) {

}
@media only screen and (min-width: 993px) {
}
</style>
