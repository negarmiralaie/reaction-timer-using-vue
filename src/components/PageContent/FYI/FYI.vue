<template>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        FYI
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>This activity is for improving <a href="https://www.sciencedirect.com/topics/psychology/sustained-attention">sustained attention</a> through <a href="https://moodyneuro.org/attention-process-training/">APT</a>. You may add some noise to this activity so you would help your <a href="https://www.mentalup.co/blog/selective-attention">selective attention</a> as well &#128512;</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'FYI',
    components:{}
}
</script>

<style scoped>

.accordion{
    margin: 2rem 0;
}

a{
    font-weight: bold;
    color: inherit;
}

</style>