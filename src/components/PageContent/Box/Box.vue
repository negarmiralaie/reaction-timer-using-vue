<template>
    <LoadingPage v-if="!isBoxShown"/>
    <section v-if="isBoxShown" @click="stopTimer" class="Box">
        <p>Click Here</p>
    </section>
</template>

<script>
// import LoadingPage from '../LoadingPage/LoadingPage.vue'
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
    }},
    mounted(){
        setTimeout(() =>{
            this.isBoxShown = true
            this.startTimer()
        },this.delay)
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

<style>

</style>

