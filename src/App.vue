<template>
<PageContent/>
<!-- <font-awesome-icon icon="phone" /> -->

</template>

<script>
import PageContent from './components/PageContent/PageContent.vue'
import Box from './components/PageContent/Box/Box.vue'

export default {
  name: 'App',
  components: { PageContent, Box},
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
  padding: 10%;
}
</style>
