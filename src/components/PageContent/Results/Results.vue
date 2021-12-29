<template>
    <h3>See what you've done:</h3>
    <p>It took you {{reactionTime}}ms to click</p>
</template>

<script>
export default {
    name: 'Results',
    components:{},
    props:['reactionTime']
}
</script>

<style>

</style>