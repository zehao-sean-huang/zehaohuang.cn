<template>
  <div id="app" class="text-light container cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">Zehao Sean Huang</h3>
        <nav class="nav nav-masthead justify-content-center">
          <router-link class="nav-link" active-class="active" to="/#">Home</router-link>
          <router-link class="nav-link" active-class="active" to="/experiences">Experiences</router-link>
          <router-link class="nav-link" active-class="active" to="/projects">Projects</router-link>
          <router-link class="nav-link" active-class="active" to="/others">Others</router-link>
        </nav>
      </div>
    </header>
      <transition name="fade" mode="out-in">
          <router-view/>
      </transition>
    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>Credit: <a href="https://getbootstrap.com/">Bootstrap</a>, Theme: <a href="https://twitter.com/mdo">@mdo</a>.</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
html {
  height: 100%;
  background: url(~@/assets/background.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

body {
  background: url(~@/assets/background.png) no-repeat center center fixed;
}

body.home {
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: -ms-flexbox;
  display: flex;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}

body.projects {
  height: 100%;
  /*background-image: url(~@/assets/background.png);*/
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: -ms-flexbox;
  display: flex;
  /*color: #fff;*/
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}

body.others {
  height: 100%;
  /*background-image: url(~@/assets/background.png);*/
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: -ms-flexbox;
  display: flex;
  /*color: #fff;*/
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}

body.experiences {
  height: 100%;
  /*background-image: url(~@/assets/background.png);*/
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: -ms-flexbox;
  display: flex;
  /*color: #fff;*/
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}

/*
 * Header
 */
.masthead {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: right;
  }
}

/*
 * Footer
 */
.mastfoot {
  color: rgba(255, 255, 255, .5);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
