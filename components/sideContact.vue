<template>
   <div class="side-container open">
       <header class="side-header">
           <div class="header-img">
               <img src="/img/student.svg" alt="">
           </div>
           <div class="header-notes">
               <h5>Bello Ajibola Fuad</h5>
               <span>Developer &amp; Web Designer</span>
           </div>
       </header>
       <main class="main-body">
           <form @submit.prevent="">
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
                    <button class="btn">Send Message</button>
                </div>
            </form>
       </main>
   </div>
</template>
<style lang="scss" scoped>
.open {
    right: 0px;
}
.side-container {
    width: 370px;
    height: auto;
    overflow: none;
    position: fixed;
    top: 0;
    bottom: 0;
    // right: -400px;
    background: #fff;
    z-index: 1000;
    box-shadow: -2px 0 10px rgba(0,0,0,.4);
    transition: .25s;
    margin-top: 12rem;

    header {
        background: #4CAF50;
        padding: 30px;
        padding-top: 20px;
        color: #fff;
        display: flex;
        justify-content: space-between;

        .header-img {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            overflow: hidden;
            border: 5px solid #fff;
            background: #e2e2e2;
            box-shadow: 0 2px 6px rgba(0,0,0,.3);
        }

        .header-notes {
            margin-top: 36px;
        }
    }

    main.main-body {
        padding: 30px;

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
</style>
