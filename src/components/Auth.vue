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
    <div v-if="content == 'login'" class="flex flex-col items-center">
      <div class="flex flex-col items-center mt-9 gap-5">
        <div class="flex justify-start w-[280px] px-1">
          <h1 class="text-[12px] text-start font-normal text-[3d3d3d]">
            Enter your username and password to login.
          </h1>
        </div>
        <input
          class="px-3 py-2 border-2 rounded-md"
          type="email"
          placeholder="faxriddinov@gmail.com"
        />
        <div class="flex relative">
          <input
            class="px-3 py-2 border-2 rounded-md"
            :type="type"
            placeholder="Password"
          />
          <button
            @click="type == 'password' ? (type = 'text') : (type = 'password')"
            class="absolute right-2 top-3.5"
          >
            <img src="../assets/eye.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="text-[#46A358] text-sm w-[280px] text-end px-1 py-2">
        <a href="#d">Forgot Password?</a>
      </div>

      <div class="flex flex-col gap-2 items-center mt-2">
        <button
          class="w-[280px] py-1.5 px-3 bg-[#46A358] rounded-md text-white"
        >
          Login
        </button>
        <div class="flex justify-center gap-5 items-center">
          <img src="../assets/line.svg" width="85" alt="line" />
          <p class="text-sm text-[#3d3d3d]">Or login with</p>
          <img src="../assets/line.svg" width="85" alt="line" />
        </div>
        <button
          class="w-[280px] py-1.5 px-3 border rounded-md flex gap-1 justify-center items-center"
        >
          <img src="../assets/g.svg" alt="" /> Login with Google
        </button>
        <button
          class="w-[280px] py-1.5 px-3 border rounded-md flex justify-center items-center gap-1"
        >
          <img src="../assets/ff.svg" alt="" /> Login with Facebook
        </button>
      </div>
    </div>
    <div v-if="content == 'register'" class="flex flex-col items-center">
      <div class="flex flex-col items-center mt-9 gap-5">
        <div class="flex justify-start w-[280px] px-1">
          <h1 class="text-[12px] text-start font-normal text-[3d3d3d]">
            Register
          </h1>
        </div>
        <input
          class="px-3 py-2 border-2 rounded-md"
          type="email"
          placeholder="faxriddinov@gmail.com"
        />
        <div class="flex relative">
          <input
            class="px-3 py-2 border-2 rounded-md"
            :type="type"
            placeholder="Password"
          />
          <button
            @click="type == 'password' ? (type = 'text') : (type = 'password')"
            class="absolute right-2 top-3.5"
          >
            <img src="../assets/eye.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="text-[#46A358] text-sm w-[280px] text-end px-1 py-2">
        <a href="#d">Forgot Password?</a>
      </div>

      <div class="flex flex-col gap-2 items-center mt-2">
        <button
          class="w-[280px] py-1.5 px-3 bg-[#46A358] rounded-md text-white"
        >
          Login
        </button>
        <div class="flex justify-center gap-5 items-center">
          <img src="../assets/line.svg" width="85" alt="line" />
          <p class="text-sm text-[#3d3d3d]">Or login with</p>
          <img src="../assets/line.svg" width="85" alt="line" />
        </div>
        <button
          class="w-[280px] py-1.5 px-3 border rounded-md flex gap-1 justify-center items-center"
        >
          <img src="../assets/g.svg" alt="" /> Login with Google
        </button>
        <button
          class="w-[280px] py-1.5 px-3 border rounded-md flex justify-center items-center gap-1"
        >
          <img src="../assets/ff.svg" alt="" /> Login with Facebook
        </button>
      </div>
    </div>

    <!--  -->
  </div>
</template>

<style scoped></style>
