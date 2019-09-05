<template>
  <main role="main">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 inner cover my-auto py-4">
          <img src="../assets/profile.jpg" class="rounded-circle" alt="background" width="250">
        </div>
        <div class="col-lg-6 inner cover my-auto py-4">
          <h1 class="cover-heading">Hey, It's Sean!</h1>
          <p class="lead">Sophomore CS+Math Student at UC Berkeley</p>
          <div class="text-center mx-auto justify-content-center">
            <p class="lead">
              <a class="mx-2" href="https://linkedin.com/in/zehao-sean-huang" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"></font-awesome-icon>
              </a>
              <a class="mx-2" href="https://github.com/zehao-sean-huang" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" size="2x"></font-awesome-icon>
              </a>
              <a class="mx-2" href="https://instagram.com/zehao_sean_huang" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" size="2x"></font-awesome-icon>
              </a>
              <a class="mx-2" href="https://facebook.com/zehao-sean-huang" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook']" size="2x"></font-awesome-icon>
              </a>
              <a class="mx-2" href="mailto:zehao.sean.huang@gmail.com" target="_blank">
                <font-awesome-icon :icon="['fas', 'envelope']" size="2x"></font-awesome-icon>
              </a>
              <a class="mx-2" href="https://zehaohuang.cn/resume.pdf" target="_blank">
                <font-awesome-icon :icon="['fas', 'file-code']" size="2x"></font-awesome-icon>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <router-link class="carousel-control-next" to="/experiences" role="button"
                 data-toggle="tooltip" data-placement="right" title="Tooltip on right">
      <span class="carousel-control-next-icon" aria-hidden="true" style="font-size: 50px;"></span>
      <span class="sr-only">Next</span>
    </router-link>
  </main>
</template>

<script>
  export default {
    name: 'home',
    beforeCreate() {
      document.body.className = 'home';
    }
  };
</script>

<style lang="scss" scoped>

  a,
  a:focus,
  a:hover {
    color: #fff;
  }

  .btn-secondary,
  .btn-secondary:hover,
  .btn-secondary:focus {
    color: #333;
    text-shadow: none; /* Prevent inheritance from `body` */
    background-color: #fff;
    border: .05rem solid #fff;
  }

  .cover-container {
    max-width: 42em;
  }

  /*
   * Cover
   */
  .cover {
    padding: 0 1.5rem;
  }
  .cover .btn-lg {
    padding: .75rem 1.25rem;
    font-weight: 700;
  }
</style>