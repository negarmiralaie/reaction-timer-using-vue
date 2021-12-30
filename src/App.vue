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
}

.Box{
  background-color:red;
  color:white;
  cursor: pointer;
  position: fixed;
  display:flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 50%;
  height: 30vh;
  border-radius: 10px;
}

.Box p{
  margin: auto;
}
</style>
