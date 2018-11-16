<template>
	<section class="homepage">
		<div class="homepage-img">
			<img src="/img/student.svg" alt="">
		</div>
		<div class="homepage-content">
			<h1>I'm <span class="branded-text">Bello Ajibola</span></h1>
			<h3>Developer <span class="branded-text">and</span> Web designer</h3>
			<p>Hello, I’m Bello Ajibola. I have 4 years of experience in Web develop and UX design. Come and knock my door, I'll be very happy to be Your partner, and let's make something great together!</p>
			<div class="button-container">
				<div class="contact-btn">
					<button class="btn" @click="goToContact">Conact Me</button>
				</div>
				<div class="download-btn">
					<button class="btn">Download CV</button>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	methods: {
	  goToContact () {
		this.$router.push('/contact')
	}
  }
}
</script>
<style lang="scss" scoped>
.homepage {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8rem 12.5rem;

  .homepage-img {
		flex-basis: 24%;
    img {
      min-height: 31.2rem;
      max-height: 31.2rem;
      min-width: 25rem;
      max-width: 25rem;
    }
  }

  .homepage-content {
	flex-basis: 74%;

	h1 {
		font-size: 50px;
		line-height: 60px;
		margin-top: 0;
		margin-bottom: 1.5rem;
	}

	h3 {
		font-size: 20px;
		line-height: 26px;
		margin-top: 0;
		margin-bottom: 36px;
		font-weight: 500
	}

	P {
		margin-bottom: 1.5rem;
	}

	.button-container {
		display: flex;

		.btn {
			font-size: 0.9rem;
			line-height: 1.6rem;
			padding: 0.68rem 1.81rem;
			border: none;
			border-radius: 3px;
			box-shadow: 0 2px 2px rgba(0,0,0,.3);
			text-align: center;
			cursor: pointer;
			margin-right: 2rem; 
			text-transform: uppercase;
			outline: none;
		}

		.contact-btn {
			.btn {
				background: #4CAF50;
				color: #fff;
			}
		}

		.download-btn {
			.btn {
				background: #fff;
				color: #000;
			}
		}
	}
  }
}
@media only screen and (max-width: 600px) {
  .homepage {
		padding: 7rem 1rem;

    .homepage-img {
      display: none;
    }

		.homepage-content {
			flex-basis: 100%;

			.button-container {
				flex-direction: column;

				.contact-btn {
					margin-bottom: 1.26rem;
				}
				.btn {
					width: 100%;
				}
			}
		}
  }
}

@media only screen and (min-width: 600px) and (max-width: 992px) {

}
@media only screen and (min-width: 993px) {

}
</style>

