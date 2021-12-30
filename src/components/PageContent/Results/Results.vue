<template>
    <h3>See what you've done:</h3>
    <p>It took you {{reactionTime}}ms to click</p>
    <small>This message will disappear in 5 seconds</small>
</template>

<script>
export default {
    name: 'Results',
    components:{},
    props:['reactionTime'],
    data(){
      isResultsShown:true  
    },
    mounted(){
        setTimeout(() =>{
            this.isResultsShown=false
            this.$emit('isResultsShown', this.isResultsShown)
        },5000)
    }
}
</script>

<style>

</style>