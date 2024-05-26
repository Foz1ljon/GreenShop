<script>
export default {
  name: "Section2",
  data() {
    return {
      flowers: [
        {
          img: "/flower1.png",
          title: "Summer cactus & succulents",
          about:
            "We are an online plant shop offering a wide range of cheap and trendy plants",
        },
        {
          img: "/flower2.png",
          title: "Styling Trends  & much more",
          about:
            "We are an online plant shop offering a wide range of cheap and trendy plants",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="grid grid-cols-2 gap-8 mt-[150px] mb-20">
    <div v-for="(item, index) in flowers" :key="index">
      <div class="flex items-center w-[580px] bg-[#FBFBFB] text-end">
        <div class="flex relative">
          <img class="absolute bottom-1 left-2" src="/elipsis.png" alt="" />
          <img class="" :src="item.img" alt="" />
        </div>
        <div class="flex flex-col items-end p-4 px-6 gap-4">
          <h1 class="text-lg font-black uppercase w-[160px]">
            {{ item.title }}
          </h1>
          <p class="text-[#727272] text-sm w-[292px]">
            {{ item.about }}
          </p>
          <button class="px-3 py-2 rounded-md bg-[#46A358] text-white">
            Find more &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
