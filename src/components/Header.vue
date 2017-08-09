<template>
    <header>
            <span :class="[color0]">{{msg0}}</span><span :class="[color1]">{{msg1}}</span><span :class="[color0]">{{msg2}}</span>
    </header>

</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg0: 'on',
        msg1: 'line-',
        msg2: 'chat',
        color0: 'fontColor1',
        color1: 'fontColor0'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
header,span
    margin 0
    padding 0

header
    display block
    width: 100%
    position absolute
    color white
    font-size 2.5rem
    text-indent 0.4rem

.fontColor0
    color #ff8c00

.fontColor1
    color #3385ff

</style>
