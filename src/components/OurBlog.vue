<script>
export default {
  name: "OurBlog",
  data() {
    return {
      posts: [
        {
          img: "/post-img1.png",
          mini_title: "September 12  I Read in 6 minutes",
          title: "Cactus & Succulent Care Tips",
          about:
            "Cacti are succulents are easy care plants for any home or patio. ",
        },
        {
          img: "/post-img2.png",
          mini_title: "September 13  I Read in 2 minutes",
          title: "Top 10 Succulents forYour Home",
          about: "Best in hanging baskets. Prefers medium to high light.",
        },
        {
          img: "/post-img3.png",
          mini_title: "September 15  I Read in 3 minutes",
          title: "Cacti & Succulent Care Tips",
          about:
            "Cacti and succulents thrive in containers and because most are..",
        },
        {
          img: "/post-img4.png",
          mini_title: "September 15  I Read in 2 minutes",
          title: "Best Houseplants Room by Room",
          about: "The benefits of houseplants are endless. In addition to..",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold">Our Blog Posts</h1>
      <h3 class="text-sm text-[#727272]">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </h3>
    </div>
    <div class="my-12 grid grid-cols-4 gap-5">
      <div v-for="(item, index) in posts" :key="index">
        <div class="post w-[268px] bg-[#FBFBFB]">
          <img :src="item.img" alt="post" />
          <div class="flex flex-col items-start p-3 gap-2">
            <p class="text-sm font-medium text-[#46A358]">
              {{ item.mini_title }}
            </p>
            <h1 class="text-xl font-bold w-[189px]">
              {{ item.title }}
            </h1>
            <p class="text-sm font-normal text-[#727272] w-[242px]">
          {{ item.about }}
            </p>

            <button class="">Read More &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
