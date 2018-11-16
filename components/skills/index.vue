<template>
    <section class="skills">
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
                        <div class="skill">
                            <label class="progress-label">HTMl5 & CSS3</label>
                            <div class="progress">
                                <div class="progress-bar" style="width: 99.8%">99.8%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <label class="progress-label">PHP & MYSQL</label>
                            <div class="progress">
                                <div class="progress-bar" style="width: 80%">80%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <label class="progress-label">JAVASCRIPT</label>
                            <div class="progress">
                                <div class="progress-bar" style="width: 90.8%">90.8%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <label class="progress-label">VUE.JS</label>
                            <div class="progress">
                                <div class="progress-bar" style="width: 95%">95%</div>
                            </div>
                        </div>
                         <div class="skill">
                            <label class="progress-label">NUXT.JS</label>
                            <div class="progress">
                                <div class="progress-bar" style="width: 50%">50%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <label class="progress-label">NODE.JS &
                                MONGODB</label>
                            <div class="progress">
                                <div class="progress-bar" style="width: 90.8%">90.8%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="design-skills">
                    <h5>Design Skills</h5>
                    <div class="skill-set">
                        <div class="skill">
                            <label class="progress-label">UI/UX</label>
                            <div class="progress">
                                <div class="progress-bar" style="width: 99.8%">99.8%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <label class="progress-label">SYSTEM ARCHITECTURAL DESIGN</label>
                            <div class="progress">
                                <div class="progress-bar" style="width: 95%">95%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <label class="progress-label">DATABASE SCHEME DESIGN</label>
                            <div class="progress">
                                <div class="progress-bar" style="width: 94.8%">94.8%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
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
