<template>
  <main id="app">
    <Header></Header>
    <rotateImg></rotateImg>
    <router-view></router-view>
  </main>
</template>

<script>
import Header from './components/Header'
import rotateImg from './components/rotateImg'
export default {
  components: { Header, rotateImg },
  name: 'app',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  position relative
  background url("./assets/background.jpg") no-repeat
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: block;
  background-position-x 50%

@media screen and (min-width: 1000px)
  #app
    background-size: 100%
    background-position-x left
    width: 100vw
    height: 100vh
    overflow hidden
</style>
