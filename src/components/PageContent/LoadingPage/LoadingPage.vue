<template>
    <p>Wait for the box to show up...</p>
    <font-awesome-icon icon="spinner" class="spinner"/>

</template>

<script>
export default {
    name: 'LoadingPage',
    components:{}
}
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.spinner{
    animation: spin 2s infinite linear;
}

</style>