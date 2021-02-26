<template>
  <div class="col d-flex justify-content-center">
    <div class="card advantages-card">
      <div class="card-body card-advantages">
        <i class="advantages-item-i" :class="icon"></i>
        <p class="card-text advantages-item-p">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "description"],
};
</script>
