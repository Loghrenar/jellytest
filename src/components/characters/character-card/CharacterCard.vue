<template>
  <div class="root">
    <div class="jumbotron">
      <h1 class="display-4" :title="character?.name">
        <RouterLink :to="`/characters/${character?.id}`">{{
          character?.name
        }}</RouterLink>
      </h1>
      <img
        :src="character?.image"
        :alt="character?.name"
        :title="character?.name"
        class="rounded img-fluid mx-auto d-block"
      />
      <hr class="my-4" />
      <p>
        Status: {{ character?.status }} - Species: {{ character?.species }} -
        Gender: {{ character?.gender }}
      </p>
      <p class="lead" v-if="isPage">
        <span
          ><i class="bi bi-geo-alt pe-2"></i
          >{{ character?.location?.name }}</span
        >
        <br />
        <span
          ><i class="bi bi-globe pe-2"></i>{{ character?.origin?.name }}</span
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
    isPage: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
