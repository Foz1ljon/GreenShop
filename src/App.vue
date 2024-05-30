<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Section from "./components/Section.vue";
import Section2 from "./components/Section2.vue";
import OurBlog from "./components/OurBlog.vue";
import Footer from "./components/Footer.vue";
import Auth from "./components/Auth.vue";
import BottomMenu from "./components/BottomMenu.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Auth,
    Section,
    Section2,
    OurBlog,
    Footer,
    BottomMenu,
  },
};
</script>

<template>
  <div class="container mb-40">
    <Auth />
    <Navbar />
    <Main />
    <Section />

    <Section2 />
    <OurBlog />
    <Footer />
  </div>
  <BottomMenu />
</template>

<style scoped></style>
