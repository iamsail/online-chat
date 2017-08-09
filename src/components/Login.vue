<template>
  <div class="Login">
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.Login
  position absolute
  color deepskyblue
</style>
