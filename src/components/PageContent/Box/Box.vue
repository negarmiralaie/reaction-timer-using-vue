<template>
    <section v-if="isBoxShown" @click="stopTimer" class="Box">
        <p>Click Here</p>
    </section>    
</template>

<script>
export default {
    name: 'Box',
    components:{},
    props:['delay'],
    data(){ 
        return{
            isBoxShown: false,
            timer:null,
            reactionTime:0
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

