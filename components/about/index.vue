<template>
    <section class="about animated slideInUp">
        <div class="page-header">
            <h1 class="page-title">
                About <span class="branded-text">Me</span>
            </h1>
        </div>
        <div class="about-container">
            <div class="about-img">
                <img src="/img/student.svg" alt=""> 
            </div>
            <div class="about-other">
                <div class="about-me-container">
                    <div class="about-me">
                        <h3>Bello Ajibola</h3>
                        <h5>Developer <span class="">and</span> Web designer</h5>
                        <div class="about-me-content">
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum eaque sit adipisci modi, incidunt voluptatum perspiciatis maiores commodi quasi delectus recusandae autem dolore? Officiis nam rem doloremque temporibus nostrum!
                                </p>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe et numquam cumque dolorem, aliquam sit cupiditate odit, consequatur, nemo quaerat est! Officiis qui ipsum exercitationem dignissimos, itaque sed blanditiis!
                                </p>
                            </div>
                        </div>
                        <div class="about-me-table">
                            <ul>
                                <li>
                                    <span class="info">Name</span>
                                    <span class="value">Bello Ajibola Fuad</span>
                                </li>
                                <li>
                                    <span class="info">Date of Birth</span>
                                    <span class="value">Setpember 30, 1998</span>
                                </li>
                                <li>
                                    <span class="info">Address</span>
                                    <span class="value">Mushin, Lagos</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span class="info">Email</span>
                                    <span class="value">bellohargbola13@gmail.com</span>
                                </li>
                                <li>
                                    <span class="info">Phone</span>
                                    <span class="value">+234 703 4846 894</span>
                                </li>
                                <li>
                                    <span class="info">Github</span>
                                    <span class="value">bodfaj13</span>
                                </li>
                            </ul>
                        </div>
                        <div class="about-me-footnote">
                            <p>
                                Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                        <div class="about-signature">
                            <p>Your's Sincerely</p>
                            <img src="/img/signature_scan.gif" alt="">
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="about-services">
                     <h3>Services</h3>
                     <div class="services">
                         <div class="service-box" v-for="(service, index) in services" :key="index">
                            <div class="icon">
                                <img :src="service.img" alt="">
                            </div>
                            <h6>{{service.name}}</h6>
                            <p>{{service.desc}}</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      services: [
        {
          img: '/img/student.svg',
          name: 'Web Design',
          desc: 'Lorem ipsum dolor sit amet, ducimus! Tenetur, quae magni in voluptas optio quia.'
        },
        {
          img: '/img/student.svg',
          name: 'Web Development',
          desc: 'Lorem ipsum dolor sit amet, ducimus! Tenetur, quae magni in voluptas optio quia.'
        },
        {
          img: '/img/student.svg',
          name: 'Technical Support',
          desc: 'Lorem ipsum dolor sit amet, ducimus! Tenetur, quae magni in voluptas optio quia.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
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

    .about-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .about-img {
            flex-basis: 24%;
            align-self: flex-start;

            img {
                min-height: 12.5rem;
                max-height: 12.5rem;
                min-width: 12.5rem;
                max-width: 12.5rem;
            }
        }

        .about-other {
            display: flex;
            flex-direction: column;
            flex-basis: 74%;

            .about-me-container {
                background: #fff;
                padding: 2.5rem;
                position: relative;
                box-shadow: 0 2px 5px rgba(0,0,0,.2);
                margin-bottom: 2.26rem;

                h3 {
                    font-size: 1.25rem;
                    line-height: 1.62rem;
                    margin-top: 0;
                    margin-bottom: 0.37rem;
                    font-weight: 500
                }

                h5 {
                    font-size: 0.9rem;
                    line-height: 2rem;
                    margin-top: 0;
                    margin-bottom: 1.5rem;
                }

                .about-me-content {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 1.62rem;
                    
                    div > p {
                        margin: 0 0 10px;
                    }
                }

                .about-me-table {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 1.62rem;

                    ul {
                        border: 1px solid #efefef;
                        text-align: center;
                        list-style: none;
                        padding: 0px;
                        flex-basis: 49%;

                        li {
                            border-bottom: 1px solid #efefef;
                            background: #fafafa;
                            font-size: 0.8rem;

                            .info {
                                width: 34%;
                                background: #ffffff;
                                left: -1px;
                                position: relative;
                                border-right: 1px solid #efefef;
                                font-weight: 500;
                                display: inline-block;
                                padding: 8px 0;
                            }

                            .value {
                                width: 65%;
                                display: inline-block;
                                padding: 8px 0;
                            }

                        }
                    }
                }

                .about-me-footnote {
                    margin-bottom: 1.62rem;
                }

                .about-signature {
                    position: relative;
                    margin: 0 1.12rem;
                    float: right;

                    p {
                        margin-bottom: 1.5rem;
                    }

                    img {
                        width: 125px;
                    }
                }
            }

            .about-services {
                h3 {
                    font-size: 1.25rem;
                    line-height: 1.62rem;
                    margin-top: 0;
                    margin-bottom: 2.26rem;
                    font-weight: 500;
                }

                .services {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    

                    .service-box {
                        cursor: pointer;
                        text-align: center;
                        flex-basis:  33.3%;
                        margin-bottom: 0.6rem;

                        .icon {
                            border-radius: 100%;
                            display: inline-block;
                            width: 6.2rem;
                            height: 6.2rem;
                            line-height: 6.2rem;
                            font-size: 3rem;
                            color: #232323;
                            background: #fff;
                            box-shadow: 0 2px 6px rgba(0,0,0,.25);
                            margin-bottom: 10px;
                            transition: .25s;

                            img {
                                min-height: 3.1rem;
                                max-height: 3.1rem;
                                min-width: 3.1rem;
                                max-width: 3.1rem;
                                margin: 1.56rem;
                            }
                        }
                        h6 {
                            line-height: 0.75rem;
                            margin-bottom: 0.56rem;
                            text-transform: uppercase;
                            font-size: 0.8rem;
                        }
                    }
                }
            }

        }
    }
}
@media only screen and (max-width: 600px) {
  .about {
    padding: 7rem 1rem;
    
    .about-container {
        flex-direction: column;

        .about-img {
            flex-basis: 100%;
            align-self: center;
        }
        
        .about-me-content {
            flex-direction: column;
        }

        .about-me-table {
            flex-direction: column;
        }

        .about-services {
            .services {
                flex-direction: column;
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