<template>
    <LoadingPage v-if="!isBoxShown"/>
    <section v-if="isBoxShown" @click="stopTimer" class="Box" v-bind:style="{ left: computedLeft, top: computedTop, transform: computedTransform}">
        <p>Click Here</p>
    </section>
</template>

<script>
import LoadingPage from '../LoadingPage/LoadingPage.vue'

export default {
    name: 'Box',
    components:{LoadingPage},
    props:['delay'],
    data(){ 
        return{
            isBoxShown: false,
            timer:null,
            reactionTime:0,
            left:`${Math.floor(Math.random()*(50))}%`,
            top:`${Math.floor(Math.random()*(50))}%`,
            transform: this.transform= 'translate(' + this.left + ',' + this.top + ')'
    }},
    mounted(){
        setTimeout(() =>{
            this.isBoxShown = true
            this.startTimer()
        },this.delay)
    },
    computed: {
    computedLeft(){
      return this.left;
    },
    computedTop() {
      return this.top;
    },
    computedTransform() {
        return this.transform;
    }
  },
    methods:{
        hideBox(){
            this.isBoxShown = false
        },
        startTimer(){
            this.timer=setInterval(()=>{
                this.reactionTime++
            },1)
        },
        stopTimer(){
            clearInterval(this.timer)
            this.hideBox()
            this.$emit('isEnded', this.reactionTime)
        }
    }
}
</script>

