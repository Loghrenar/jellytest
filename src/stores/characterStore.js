import { defineStore } from "pinia";

export const useCharacterStore = defineStore("characterStore", {
  state: () => ({
    characters: [],
  }),
  getters: {
    geCharacterById: (state) => {
      return (charId) => state.characters.find((char) => char.id === charId);
    },
  },
  actions: {
    addCharacter(character) {
      this.characters = character;
    },
  },
});
