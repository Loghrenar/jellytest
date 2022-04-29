<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <header class="row">
      <div>
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/Rick_and_Morty.svg"
          width="320"
          height="150"
        />
        <br />
        <RouterLink class="pe-2" to="/">Home</RouterLink>
        <RouterLink to="/characters">Characters</RouterLink>
      </div>
    </header>
    <section class="row">
      <RouterView />
    </section>
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
