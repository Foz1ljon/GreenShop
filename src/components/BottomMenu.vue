<script>
export default {
  name: "BottomMenu",
};
</script>

<template>
  <div
    class="md:hidden sm:fixed sm:bottom-1  rounded-lg sm:bg-white sm:w-[80%] sm:mx-[10%] z-30 sm:px-9 sm:flex sm:p-4 sm:justify-between "
  >
  <div class="flex items-center gap-10">
    <img src="../assets/home.svg" width="30" alt="home">
    <img src="../assets/likee.svg" width="30" alt="home">

<div class="fixed bg-green-500 rounded-full w-[75px] h-[15%] left-[42.5%] bottom-9"></div>
    
  </div>
  <div class="flex items-center gap-10">
    <img src="../assets/cart3.svg" width="30" alt="home">
    <img src="../assets/user.svg" width="27" alt="home">

  </div>
  
  </div>
</template>
