<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Section from "./components/Section.vue";
import Section2 from "./components/Section2.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Section,
    Section2,
  },
};
</script>

<template>
  <div class="container">
    <Navbar />
    <Main />
    <Section />
    <Section2 />
  </div>
</template>

<style scoped></style>
