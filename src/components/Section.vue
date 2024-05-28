<script>
export default {
  name: "Section",
  data() {
    return {
      products: [
        { img: "/product1.png", title: "Barberton Daisy", price: "199.00" },
        { img: "/product2.png", title: "Angel Wing Begonia", price: "200.00" },
        { img: "/product3.png", title: "African Violet", price: "150.00" },
        { img: "/product9.png", title: "Beach Spider Lily", price: "139.00" },
        { img: "/product5.png", title: "Blushing Bromeliad", price: "190.00" },
        { img: "/product6.png", title: "Aluminum Plant", price: "200.00" },
        { img: "/product7.png", title: "African Violet", price: "129.00" },
        { img: "/product8.png", title: "Broadleaf Lady Palm", price: "129.00" },
        { img: "/product9.png", title: "Chinese Evergreen", price: "111.00" },
      ],
      categories: [
        { title: "House Plants", count: 33 },
        { title: "Potter Plants", count: 12 },
        { title: "Seeds", count: 60 },
        { title: "Small Plants", count: 20 },
        { title: "Big Plants", count: 34 },
        { title: "Succulents", count: 43 },
        { title: "Trerrariums", count: 10 },
        { title: "Gardening", count: 14 },
        { title: "Accessories", count: 33 },
      ],
      size: [
        { title: "Small", count: 119 },
        { title: "Medium", count: 86 },
        { title: "Large", count: 79 },
      ],
      btns: [1, 2, 3, 4, ">"],
      categories_title: ["All Plants", "New Arrivals", "Sale"],
    };
  },
};
</script>

<template>
  <div class="flex gap-10 my-5">
    <div
      class="l xl:h-[165vh] bg-[#FBFBFB] py-3 px-2 flex flex-col gap-8 md:block sm:hidden"
    >
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-extrabold text-[#3d3d3d]">Categories</h1>
        <div v-for="(item, index) in categories">
          <a
            :key="index"
            class="flex justify-between focus:text-[#46A358]"
            href="#c"
            ><p class="xl:text-base lg:text-sm md:text-xs">{{ item.title }}</p>
            <p class="xl:text-base lg:text-sm md:text-xs">
              ({{ item.count }})
            </p></a
          >
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-extrabold text-[#3d3d3d]">Price Range</h1>
        <input
          class="bg-green-500 appearance-none h-1 w-full rounded-lg"
          type="range"
          min="2"
        />
        <p>
          Price:
          <b class="text-[#46A358] xl:text-base lg:text-sm md:text-xs"
            >$39 - $1230</b
          >
        </p>
        <button
          class="px-6 py-2 w-32 uppercase text-sm rounded-lg font-medium text-white bg-[#46A358] border border-[#46A358] hover:bg-white hover:text-[#46A358] hover:border hover:border-[#46A358]"
        >
          Filter
        </button>
      </div>

      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-extrabold text-[#3d3d3d]">Size</h1>
        <div v-for="(item, index) in size">
          <a
            :key="index"
            class="flex justify-between focus:text-[#46A358]"
            href="#c"
            ><p>{{ item.title }}</p>
            <p>({{ item.count }})</p></a
          >
        </div>
      </div>

      <div class="flex flex-col items-center">
        <img src="../assets/super.svg" alt="img" />
        <h1 class="text-base uppercase font-semibold">UP TO 75% OFF</h1>
        <img src="/img.png" alt="img" />
      </div>
    </div>

    <div class="flex flex-col gap-4 relative">
      <div class="md:flex md:justify-between md:items-center">
        <div class="flex md:gap-5 sm:gap-8">
          <div v-for="(item, index) in categories_title">
            <a
              class="lg:text-base md:text-xs focus:border-b-4 focus:border-[#46A358] focus:mb-2 focus:text-[#46A358]"
              href="#c"
              :key="index"
              >{{ item }}</a
            >
          </div>
        </div>

        <p class="sm:hidden md:block lg:text-base md:text-xs">
          Short by: Default sorting
        </p>
      </div>
      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-cols-2 sm:grid-rows-4"
      >
        <div v-for="(item, index) in products" :key="index">
          <div
            class="card flex flex-col gap-2 mb-3 border-t border-t-[#FBFBFB] hover:border-t-[#46A358]"
            @mouseover="item.hover = true"
            @mouseleave="item.hover = false"
          >
            <div
              class="md:bg-[#FBFBFB] md:p-5 sm:bg-[#F4F4F4] sm:rounded-2xl relative"
            >
              <img class="bg-cover" :src="item.img" alt="img" />
              <div
                class="buttons absolute flex gap-4 bottom-[1px] left-[30%]"
                :class="{ hidden: !item.hover }"
              >
                <button><img src="../assets/cart2.svg" alt="cart" /></button>
                <button><img src="../assets/search.svg" alt="search" /></button>
                <button><img src="../assets/like.svg" alt="like" /></button>
              </div>
            </div>

            <div>
              <h1 class="text-lg text-[#3D3D3D]">{{ item.title }}</h1>
              <p>
                <b class="text-[#46A358]">${{ item.price }}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sm:hidden md:flex flex gap-3 justify-end absolute md:bottom-[60px] lg:bottom-[200px] xl:bottom-calc-100%-5 right-1"
      >
        <div v-for="(item, index) in btns" :key="index">
          <button
            class="px-2 py-1 border rounded-md focus:bg-[#46A358] focus:text-white"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
