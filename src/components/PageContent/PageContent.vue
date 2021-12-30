<template>
  <section v-if="!isGameStarted&!isResultsShown">
    <PageDetails/>
    <button @click="start">Click To Start</button>
    <FYI/>
  </section>
  <Box v-if="isGameStarted" :delay="delay" @isEnded="end"/>
  <Results :reactionTime="reactionTime" @isResultsShown="showResults" v-if="isResultsShown"/>
</template>

<script>
import PageDetails from '../PageContent/PageDetails/PageDetails.vue'
import Box from '../PageContent/Box/Box.vue'
import Results from '../PageContent/Results/Results.vue'
import FYI from '../PageContent/FYI/FYI.vue'

export default {
  name: 'PageContent',
  components: {PageDetails ,Box, Results, FYI},

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
