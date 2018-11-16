<template>
  <section class="contact">
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
            <li>76, Old Yidi road, Ilorin, Kwara State, Nigeria</li>
            <li>Phone: +234 803 4846 894</li>
            <li>Email: <a href="mailto:bellohargbola13@gmail.com" class="branded-text">bellohargbola13@gmail.com</a></li>
          </ul>
        </div>
        <div class="social-icons">
          <a href="" class="social-icon">
            <img src="img/email.svg" alt="">
          </a>
          <a href="" class="social-icon">
            <img src="img/whatsapp.svg" alt="">
          </a>
        </div>
      </div>
      <div class="contact-form">
        <h5>Contact Form</h5>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <input type="text" name="" id="" placeholder="Full Name" required>
          </div>
          <div class="form-group">
            <input type="email" name="" id="" placeholder="Email" required>
          </div>
          <div class="form-group">
            <textarea name="" id="" cols="30" rows="10" placeholder="Tell me what you want" required></textarea>
          </div>
          <div class="contact-btn">
            <Spinner v-if="loading"></Spinner>
            <button class="btn">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import Spinner from '~/components/spinner.vue'
import axios from 'axios'

export default {
  data () {
    return {
      loading: false
    }
  },
  components: {
    Spinner
  },
  methods: {
    onSubmit () {
      console.log('okay pls submit!')
      axios.post('http://localhost:3000/api/test', {data: 'from client'})
      .then(result => console.log(result))
      .catch(error => console.log(error))
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
            color: #232323;
            background: #fff;
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

          .social-icon:hover {
            background: #4CAF50;
            color: #fff;
          }
        }
    }

    .contact-form {
      flex-basis: 59%;
      background: #fff;
      padding: 2.5rem;
      position: relative;
      box-shadow: 0 2px 5px rgba(0,0,0,.2);

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