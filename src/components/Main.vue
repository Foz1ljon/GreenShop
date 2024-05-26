<script>
export default {
  name: "Main",
};
</script>

<template>
  <div class="grid grid-cols-2 items-center pl-8 gap-28 bg-[#FBFBFB]">
    <div class="flex flex-col w-[600px] items-start gap-10">
      <div>
        <h2 class="text-[#3D3D3D] text-base tracking-wider uppercase">
          Welcome to GreenShop
        </h2>
        <h1 class="text-7xl text-[#3D3D3D] uppercase font-extrabold">
          Let’s Make a Better <b class="text-[#46A358]">Planet</b>
        </h1>
        <p class="text-[#727272]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
      </div>

      <button
        class="w-36 py-2 uppercase text-sm rounded-lg font-medium text-white bg-[#46A358]"
      >
        shop now
      </button>
    </div>
    <div class="w-[530px] p-2">
      <div class="relative">
        <img src="/img-big.png" alt="big" />
        <img class="absolute w-[30%] bottom-9" src="/img-mini.png" alt="mini" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
