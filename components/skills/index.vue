<template>
    <section class="skills animated slideInUp">
        <div class="page-header">
            <h1 class="page-title">
            My <span class="branded-text">Skills</span>
            </h1>
        </div>
        <div class="skills-container">
            <div class="web-skills">
                <div class="coding-skills">
                    <h5>Coding Skills</h5>
                    <div class="skill-set">
                        <div class="skill" v-for="(cSkills, index) in codingSkills" :key="index">
                            <label class="progress-label">{{cSkills.name}}</label>
                            <div class="progress">
                                <div class="progress-bar" :style="{'width': cSkills.percentage}">{{cSkills.percentage}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="design-skills">
                    <h5>Design Skills</h5>
                    <div class="skill-set">
                        <div class="skill" v-for="(dSkills, index) in designSkills" :key="index">
                            <label class="progress-label">{{dSkills.name}}</label>
                            <div class="progress">
                                <div class="progress-bar" :style="{'width': dSkills.percentage}">{{dSkills.percentage}}</div>
                            </div>
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
      codingSkills: [
        {
          name: 'HTML & CSS',
          percentage: '99.8%'
        },
        {
          name: 'PHP & MYSQL',
          percentage: '80%'
        },
        {
          name: 'JAVASCRIPT',
          percentage: '90.7%'
        },
        {
          name: 'VUE.JS',
          percentage: '89%'
        },
        {
          name: 'NUXT.JS',
          percentage: '70%'
        },
        {
          name: 'NODE.JS & MONGODB',
          percentage: '89%'
        },
      ],
      designSkills: [
        {
          name: 'UI/UX',
          percentage: '99.8%'
        },
        {
          name: 'SYSTEM ARCHITECTURAL DESIGN',
          percentage: '95%'
        },
        {
          name: 'SDATABASE SCHEME DESIGN',
          percentage: '94.8%'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.skills {
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

  .skills-container {
    .web-skills {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .coding-skills {
        flex-basis: 49%;
        background: #fff;
        padding: 2.5rem;
        position: relative;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        align-self: flex-start;

        h5 {
          font-size: 0.9rem;
          line-height: 2rem;
          margin-top: 0;
          margin-bottom: 1.5rem;
        }

        .skill-set {
          .skill {
            margin-bottom: 1.5rem;

            .progress {
              width: 100%;
              background-color: #e8e8e8;
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

              .progress-bar {
                height: 1.8rem;
                background-color: #4caf50;
                text-align: center;
                line-height: 30px;
                color: white;
              }
            }
          }
        }
      }

      .design-skills {
        flex-basis: 49%;
        background: #fff;
        padding: 2.5rem;
        position: relative;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        align-self: flex-start;

        h5 {
          font-size: 0.9rem;
          line-height: 2rem;
          margin-top: 0;
          margin-bottom: 1.5rem;
        }

        .skill-set {
          .skill {
            margin-bottom: 1.5rem;

            .progress {
              width: 100%;
              background-color: #e8e8e8;
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

              .progress-bar {
                height: 1.8rem;
                background-color: #4caf50;
                text-align: center;
                line-height: 30px;
                color: white;
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .skills {
    padding: 7rem 1rem;

    .skills-container {
        .web-skills {
          flex-direction: column;

          .coding-skills {
            width: 100%;
            margin-bottom: 2.26rem;
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
