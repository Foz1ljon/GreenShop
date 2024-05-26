<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Section from "./components/Section.vue";
import Section2 from "./components/Section2.vue";
import OurBlog from "./components/OurBlog.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Section,
    Section2,
    OurBlog,
    Footer,
  },
};
</script>

<template>
  <div class="container">
    <Navbar />
    <Main />
    <Section />
    <Section2 />
    <OurBlog />
    <Footer />
  </div>
</template>

<style scoped></style>
