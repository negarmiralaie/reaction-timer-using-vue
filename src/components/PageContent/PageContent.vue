<template>
  <section v-if="!isStarted">
    <h1>"Reaction Timer"</h1>
    <h2>Instruction:</h2>
    <p>A box will appear any moment, click on it ASAP, you will be faced with your result =)</p>
    <button @click="start" :disabled="isStarted">Click To Start</button>
  </section>
  <Box v-if="isStarted" :delay="delay" @isEnded="end"/>
  <Results v-if="showResults" :reactionTime="reactionTime"/>
</template>



<script>
// import Box from '../PageContent/Box/Box.vue'
import Box from '../PageContent/Box/Box.vue'
import Results from '../PageContent/Results/Results.vue'

export default {
  name: 'PageContent',
  components: {Box, Results},

  data(){
      return{
        isStarted:false,
        delay: 2000 +Math.random()*4000,
        reactionTime: null,
        showResults: false
    }
  },
  methods: {
      start(){
          this.isStarted=true;
          this.showResults=false;
      },
      end(reactionTime){
        this.reactionTime= reactionTime
        this.isStarted=false;
        this.showResults=true;
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
