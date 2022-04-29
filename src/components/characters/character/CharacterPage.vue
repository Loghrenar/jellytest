<template>
  <div class="root">
    <div class="col-md-12" align="center">
      <RouterLink class="d-flex justify-content-end" to="/characters"
        >Return to characters list</RouterLink
      >

      <div v-if="geCharacterById">
        <CharacterCard :character="geCharacterById" :isPage="isCharPage" />
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import CharacterCard from "../character-card/CharacterCard.vue";
import { useCharacterStore } from "../../../stores/characterStore";

export default {
  data() {
    return {
      isCharPage: true,
    };
  },
  components: {
    CharacterCard,
  },
  setup() {
    const router = useRouter();
    const id = router.currentRoute.value.params.id;
    const store = useCharacterStore();

    return { geCharacterById: store.geCharacterById(+id) };
  },
};
</script>
