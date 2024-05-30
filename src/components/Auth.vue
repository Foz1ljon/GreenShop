<script>
import Register from "./Register.vue";
import Login from "./Login.vue";

export default {
  component: {
    Register,
    Login,
  },
  data() {
    return {
      type: "password",
      content: "login",
    };
  },
};
</script>

<template>
  <div class="left-0 fixed w-full h-screen bg-[#000000ad] z-10"></div>

  <div class="fixed w-[450px] h-[500px] bg-white z-10 top-[12%] left-[33%] p-3">
    <div class="flex justify-end"><button>&#10005;</button></div>
    <div class="flex divide-x p-2 justify-center">
      <button @click="content = 'login'" class="px-3 focus:text-[#46A358]">
        Login
      </button>
      <button @click="content = 'register'" class="px-3 focus:text-[#46A358]">
        Register
      </button>
    </div>
    <!--  -->
   
    

    <!--  -->
  </div>
</template>

<style scoped></style>
