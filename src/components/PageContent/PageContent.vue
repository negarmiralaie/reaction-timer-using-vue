<template>
  <section v-if="!isGameStarted&!isResultsShown">
    <PageDetails/>
    <button @click="start">Click To Start</button>
  </section>
  
  <Box v-if="isGameStarted" :delay="delay" @isEnded="end"/>
  <Results :reactionTime="reactionTime" @isResultsShown="showResults" v-if="isResultsShown"/>
</template>

<script>
import PageDetails from '../PageContent/PageDetails/PageDetails.vue'
import Box from '../PageContent/Box/Box.vue'
import Results from '../PageContent/Results/Results.vue'

export default {
  name: 'PageContent',
  components: {PageDetails ,Box, Results},

  data(){
      return{
        isGameStarted:false,
        delay: 2000 +Math.random()*3000,
        reactionTime: null,
        isResultsShown: false
    }
  },
  methods: {
    changeIsGameStarted(){
      this.isGameStarted = !this.isGameStarted
    },
    start(){
        //isGameStarted will be true now
        this.changeIsGameStarted()
    },
    end(reactionTime){
      this.reactionTime= reactionTime
      //isGameStarted will be false now
        this.changeIsGameStarted()
        this.isResultsShown=true
    },
    showResults(isResultsShown){
      this.isResultsShown=isResultsShown
    }
  },
}
</script>

<style>

h1{
    color: black;
}

button{
    background-color:green;
    color: white;
    box-shadow: 0 0 25px 0 rgba(0,0,0,.25);
    border: none;
    padding: 1rem;
    cursor: pointer;
    border-radius:10px;
}
</style>
