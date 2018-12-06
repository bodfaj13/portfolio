<template>
  <section class="contact animated slideInUp">
    <div class="page-header">
        <h1 class="page-title">
          Contact <span class="branded-text">Me</span>
        </h1>
    </div>
    <div class="contact-container">
      <div class="contact-address">
        <h5>Contact Address</h5>
        <div class="address-details">
          <ul>
            <li>19, Onayinngbo Street, Mushin, Lagos State, Nigeria</li>
            <li>Phone: <a class="branded-text" href="tel:+2348034846894">+234 803 4846 894</a></li>
            <li>Email: <a href="mailto:bellohargbola13@gmail.com" class="branded-text">bellohargbola13@gmail.com</a></li>
          </ul>
        </div>
        <div class="social-icons">
          <a href="https://wa.me/+2347034846894" class="social-icon">
            <img src="img/whatsapp.svg" alt="">
          </a>
        </div>
      </div>
      <div class="contact-form">
        <h5>Contact Form</h5>
        <div class="contact-notification">
          <div class="success animated fadeIn" v-if="sendSuccess" @click="offSuccess">
            <div>
              Thanks, request sent successfully! And it will be treated within the next 24 Hours.
            </div>
          </div>
          <div class="error animated fadeIn" v-if="error" @click="offError">
            <div>
              Oops, something went wrong!
            </div>
          </div>
        </div>
        <form @submit.prevent="">
          <div class="form-group">
            <input type="text" name="" id="" placeholder="Full Name" v-model="fullName" required>
          </div>
          <div class="form-group">
            <input type="email" name="" id="" placeholder="Email" v-model="email" required>
          </div>
          <div class="form-group">
            <textarea name="" id="" cols="30" rows="10" placeholder="Tell me what you want" v-model="message" required></textarea>
          </div>
          <div class="contact-btn">
            <Spinner v-if="loading"></Spinner>
            <button class="btn" v-else @click="onSubmit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import Spinner from '~/components/spinner.vue'

export default {
  data () {
    return {
      loading: false,
      fullName: '',
      email: '',
      message: '',
      sendSuccess: false,
      error: false
    }
  },
  components: {
    Spinner
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.offSuccess()
      this.offError()
      this.loading = true
      this.$axios.post('sendmessage', 
      {
        fullName: this.fullName,
        email: this.email,
        message: this.message,
      })
      .then(response => {
        console.log(response.data)
        this.sendSuccess = true
        this.timeOut()
        this.clearInputs()
      })
      .catch(error => {
        console.log(error.response.data)
        this.error = true
        this.timeOut()
      })
    },
    clearInputs () {
      this.fullName = ''
      this.email = ''
      this.message = ''
    },
    timeOut () {
      setTimeout(() => {  
        this.loading = false
      }, 1100)
    },
    offSuccess () {
      this.sendSuccess = false
    },
    offError () {
      this.error = false
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
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

  .contact-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .contact-address {
      flex-basis: 39%;
      background: #fff;
      padding: 2.5rem;
      position: relative;
      box-shadow: 0 2px 5px rgba(0,0,0,.2);
      align-self: flex-start;

      h5 {
        font-size: 0.9rem;
        line-height: 2rem;
        margin-top: 0;
        margin-bottom: 1.5rem;
      }

      .address-details {
        ul {
          margin-left: -2.5rem;

          li {
            list-style-type: none;
            margin-bottom: 0.6rem;
            a {
                text-decoration: none;
            }
          }
        }
      }

      .social-icons {
        display: flex;
          .social-icon {
            display: inline-block;
            width: 42px;
            height: 42px;
            line-height: 42px;
            font-size: 16px;
            // color: #232323;
            // background: #4CAF50;
            border-radius: 100%;
            box-shadow: 0 4px 12px rgba(0,0,0,.13);
            margin: 0 4px;
            text-align: center;
            padding: 5px;

            img {
              min-height: 20px;
              max-height: 20px;
              min-width: 20px;
              max-width: 20px;
            }
          }

          // .social-icon:hover {
          //   background: #fff;
          //   color: #000;
          // }
        }
    }

    .contact-form {
      flex-basis: 59%;
      background: #fff;
      padding: 2.5rem;
      position: relative;
      box-shadow: 0 2px 5px rgba(0,0,0,.2);

      .contact-notification {
        .success {
          background: #4CAF50;
          box-shadow: 0 2px 5px rgba(0,0,0,.2);
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          color: #fff;
          cursor: pointer;
        }

        .error {
          background: rgb(235, 52, 52);
          box-shadow: 0 2px 5px rgba(0,0,0,.2);
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          color: #fff;
          cursor: pointer;
        }
      }

      h5 {
        font-size: 0.9rem;
        line-height: 2rem;
        margin-top: 0;
        margin-bottom: 1.5rem;
      }

      form {
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
            width: 100%;
        }

        .contact-btn {
            .btn {
                background: #4CAF50;
                color: #fff;
            }
        }

        input, textarea {
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #9e9e9e;
          border-radius: 0;
          outline: none;
          height: 3rem;
          width: 100%;
          font-size: 1rem;
          margin: 0 0 15px 0;
          padding: 0;
          box-sizing: content-box;
          transition: all 0.3s;
          box-shadow: 0 2px rgba(0,0,0,.3);
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .contact {
    padding: 7rem 1rem;

    .contact-container {
      flex-direction: column;
      
      .contact-address {
        margin-bottom: 2.26rem
      }
    }
  }
}

@media only screen and (min-width: 600px) and (max-width: 992px) {

}
@media only screen and (min-width: 993px) {
}
</style>