<template>
  <div class="root">
    <div class="container">
      <div class="row">
        <div class="col-md-4 p-3">
          <div class="mt-2 border-right">
            <h3>Status</h3>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="status"
                id="alive"
                value="alive"
                v-model="status"
              />
              <label class="form-check-label" for="alive"> Alive </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="status"
                id="dead"
                value="dead"
                v-model="status"
              />
              <label class="form-check-label" for="dead"> Dead </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="status"
                id="unknowngender"
                value="unknown"
                v-model="status"
              />
              <label class="form-check-label" for="unknowngender">
                Unknown
              </label>
            </div>
            <span class="link-primary" @click="resetStatus">Clear</span>
          </div>
          <div class="mt-2">
            <h3>Gender</h3>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                v-model="gender"
              />
              <label class="form-check-label" for="female"> Female </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                v-model="gender"
              />
              <label class="form-check-label" for="male"> Male </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="genderless"
                value="genderless"
                v-model="gender"
              />
              <label class="form-check-label" for="genderless">
                Genderless
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="unknown"
                value="unknown"
                v-model="gender"
              />
              <label class="form-check-label" for="unknown"> Unknown </label>
            </div>
            <span class="link-primary" @click="resetGender">Clear</span>
          </div>
        </div>
        <div class="col-md-8" align="center">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search by title"
              v-model="title"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="searchBy"
              >
                Search
              </button>
            </div>
          </div>
          <span
            class="link-primary d-flex justify-content-end"
            @click="resetSearch"
            >Clear search</span
          >
          <div class="row row-cols-sm-2 row-cols-md-3">
            <div
              class="col p-2"
              v-for="(character, index) in characters.results"
              :key="index"
            >
              <CharacterCard :character="character" />
            </div>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item" v-if="characters?.info?.prev">
                <a class="page-link" href="#" @click="getPreviousPage"
                  >Previous</a
                >
              </li>
              <li class="page-item" v-if="characters?.info?.next">
                <a class="page-link" href="#" @click="getNextPage">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CharacterCard from "./character-card/CharacterCard.vue";
import DataService from "../../services/DataService";
import { useCharacterStore } from "../../stores/characterStore";

export default {
  data() {
    return {
      characters: {},
      title: "",
      status: "",
      gender: "",
    };
  },
  components: {
    CharacterCard,
  },
  methods: {
    getAll() {
      DataService.getAll()
        .then((response) => {
          this.characters = response.data;
          const store = useCharacterStore();
          store.addCharacter(response.data.results);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    searchBy() {
      DataService.search(this.title, this.status, this.gender)
        .then((response) => {
          this.characters = response.data;
          const store = useCharacterStore();
          store.addCharacter(response.data.results);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    resetStatus() {
      this.status = "";
      this.searchBy();
    },
    resetGender() {
      this.gender = "";
      this.searchBy();
    },
    resetSearch() {
      this.title = "";
      this.status = "";
      this.gender = "";
      this.getAll();
    },
    getPreviousPage() {
      DataService.previous(this.characters.info.prev)
        .then((response) => {
          this.characters = response.data;
          const store = useCharacterStore();
          store.addCharacter(response.data.results);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getNextPage() {
      DataService.next(this.characters.info.next)
        .then((response) => {
          this.characters = response.data;
          const store = useCharacterStore();
          store.addCharacter(response.data.results);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>
<style scoped>
.form-check > input,
label,
span {
  cursor: pointer;
}
</style>
