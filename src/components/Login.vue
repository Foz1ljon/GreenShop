<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center mt-9 gap-5">
      <div class="flex justify-start w-[280px] px-1">
        <h1 class="text-[12px] text-start font-normal text-[#3d3d3d]">
          Login
        </h1>
      </div>
      <input
        class="px-3 py-2 border-2 rounded-md"
        type="email"
        :placeholder="emailPlaceholder"
      />
      <div class="flex relative">
        <input
          class="px-3 py-2 border-2 rounded-md"
          :type="passwordType"
          placeholder="Password"
        />
        <button
          @click="togglePasswordVisibility"
          class="absolute right-2 top-3.5"
        >
          <img src="../assets/eye.svg" alt="Toggle Password Visibility" />
        </button>
      </div>
    </div>
    <div class="text-[#46A358] text-sm w-[280px] text-end px-1 py-2">
      <a href="#d">Forgot Password?</a>
    </div>

    <div class="flex flex-col gap-2 items-center mt-2">
      <button class="w-[280px] py-1.5 px-3 bg-[#46A358] rounded-md text-white">
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
        <img src="../assets/g.svg" alt="Google" /> Login with Google
      </button>
      <button
        class="w-[280px] py-1.5 px-3 border rounded-md flex justify-center items-center gap-1"
      >
        <img src="../assets/ff.svg" alt="Facebook" /> Login with Facebook
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    emailPlaceholder: {
      type: String,
      default: 'Enter your email'
    }
  },
  data() {
    return {
      passwordType: 'password'
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    }
  }
};
</script>

<style scoped>
</style>
