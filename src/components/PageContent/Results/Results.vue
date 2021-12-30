<template class="results">
    <h3>See what you've done:</h3>
    <h4>It took you {{reactionTime}}ms to click</h4>
    <small>This message will disappear in 10 seconds or you can click on below button to start again</small>
    <button @click="endShowingResults">Click to start again</button>
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
            this.endShowingResults()
        },10000)
    },
    methods:{
        endShowingResults(){
            this.isResultsShown=false
            this.$emit('isResultsShown', this.isResultsShown)
        }
    }
}
</script>

<style scoped>

small{
    display:block;
}

button{
    margin-top:1rem;
}
</style>