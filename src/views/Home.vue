<template>
  <main role="main">

    <div class="inner cover">
      <h1 class="cover-heading">Cover your page.</h1>
      <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
      <p class="lead">
        <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
      </p>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'home',
    beforeCreate() {
      document.body.className = "home";
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