<script>
export default {
  name: "Main",
};
</script>

<template>
  <div
    class="grid grid-cols-2  items-center px-2 md:gap-16  md:bg-[#FBFBFB] sm:rounded-3xl sm:bg-[#E6F3E8]"
  >
    <div class="flex flex-col pl-4 items-start md:gap-4 sm:gap-[2px]">
      <div class="flex flex-col items-start">
        <h2 class="text-[#3D3D3D] md:text-base sm:text-[7px] text-base tracking-wider uppercase">
          Welcome to GreenShop
        </h2>
        <h1
          class="sm:w-[150px] sm:text-lg xl:text-7xl lg:text-6xl lg:w-[600px] md:text-5xl md:w-[400px] text-[#3D3D3D] uppercase font-extrabold"
        >
          Let’s Make a Better <b class="text-[#46A358]">Planet</b>
        </h1>
        <p class="text-[#727272] sm:text-[11px] xl:w-full  md:w-[400px] lg:w-[500px] sm:w-full  lg:text-[15.5px] md:text-[11px]">
          We are an online plant shop offering a wide range <span class="hidden md:inline">of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!</span>
        </p>
        
      </div>

      <button
        class="md:px-5 md:py-2 uppercase xl:mt-7 md:text-sm sm:mt-3 sm:text-[10px] rounded-lg font-medium md:text-white md:bg-[#46A358] md:border md:border-[#46A358] md:hover:bg-white md:hover:text-[#46A358] hover:border hover:border-[#46A358]"
      >
        shop now <span class="md:hidden sm:inline">&#8594;</span>
      </button>
    </div>
    <div class="p-2">
      <div class="relative md:w-full sm:w-[213px] md:ml-3 sm:-ml-3 ">
        <img  src="/img-big.png" alt="big" />
        <img
          class="absolute w-[30%] sm:bottom-4 lg:bottom-7 xl:bottom-9 md:bottom-5"
          src="/img-mini.png"
          alt="mini"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
