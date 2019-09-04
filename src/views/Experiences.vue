<template>
  <div class="experiences">
    <h1>This is an experiences page</h1>
  </div>
</template>

<script>
  export default {
    name: 'experiences',
    beforeCreate() {
      document.body.className = "experiences";
    }
  }
</script>