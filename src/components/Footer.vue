<script>
export default {
  name: "Footer",
  data() {
    return {
      arr: [
        {
          img: "/Group20.png",
          title: "Garden Care",
          about:
            "We are an online plant shop offering a wide range of cheap and trendy plants.",
        },
        {
          img: "/Group21.png",
          title: "Plant Renovation",
          about:
            "We are an online plant shop offering a wide range of cheap and trendy plants.",
        },
        {
          img: "/Group22.png",
          title: "Watering Graden",
          about:
            "We are an online plant shop offering a wide range of cheap and trendy plants.",
        },
      ],
      footers: [
        {
          title: "My Account",
          items: [
            "My Account",
            "Our stores",
            "Contact us",
            "Career",
            "Specials",
          ],
        },
        {
          title: "Help & Guide",
          items: [
            "Help Center",
            "How to Buy",
            "Shipping & Delivery",
            "Product Policy",
            "How to Return",
          ],
        },
        {
          title: "Categories",
          items: [
            "House Plants",
            "Potter Plants",
            "Seeds",
            "Small Plants",
            "Accessories",
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div
    class="w-full flex flex-wrap items-center justify-between py-4 px-3 mt-36 bg-[#FBFBFB]"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-x gap-2 ">
      <div v-for="(item, index) in arr" class="cards">
        <div class="flex flex-col h-[201px] p-1 gap-1 px-4">
          <div class="img"><img :src="item.img" alt="" /></div>
          <h1 class="text-[17px] font-bold text-[#3D3D3D]">{{ item.title }}</h1>
          <p class="text-sm w-[204px] text-[#727272]">
            {{ item.about }}
          </p>
        </div>
      </div>
    </div>
    <div class="grid gap-5 w-[w-[354px]]">
      <h1 class="text-[#3d3d3d] text-lg font-bold">
        Would you like to join newsletters?
      </h1>
      <div class="flex">
        <input
          class="py-2 px-4 shadow-md rounded-md"
          type="text"
          placeholder="enter your email address"
        />
        <button class="py-2 px-4 shadow-md rounded-md bg-[#46A358] text-white border border-[#46A358] hover:bg-white hover:text-[#46A358] hover:border hover:border-[#46A358]">
          Join
        </button>
      </div>
      <p class="w-[354px] text-[13px] text-[#727272] font-normal">
        We usually post offers and challenges in newsletter. We’re your online
        houseplant destination. We offer a wide range of houseplants and
        accessories shipped directly from our (green)house to yours!
      </p>
    </div>
  </div>
  <div class="w-full bg-[#46A3581A] flex gap-14 py-10 items-center">
    <div class="log"></div>
    <div><img src="../assets/logo.svg" alt="logo" /></div>
    <div class="flex items-center gap-1 w-[200px]">
      <img src="../assets/location.svg" alt="location" />
      <p class="text-sm font-normal text-[#3d3d3d]">
        70 West Buckingham Ave. Farmingdale, NY 11735
      </p>
    </div>
    <div class="flex items-center gap-1">
      <div><img src="../assets/mail.svg" alt="mail" /></div>
      <p class="text-sm font-normal text-[#3d3d3d]">contact@greenshop.com</p>
    </div>
    <div class="flex items-center gap-1">
      <div><img src="../assets/phone.svg" alt="phone" /></div>
      <p class="text-sm font-normal text-[#3d3d3d]">+88 01911 717 490</p>
    </div>
  </div>
  <div class="w-full p-3 flex gap-36 items-center bg-[#FBFBFB]">
    <div class="grid grid-cols-3 gap-36">
      <div v-for="item in footers">
        <h1 class="text-lg font-bold text-[#3D3D3D] mb-1">{{ item.title }}</h1>
        <div v-for="itm in item.items">
          <p class="text-sm font-normal text-[#3D3D3D] mb-2">{{ itm }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <h1 class="text-lg font-bold text-[#3D3D3D]">Social Media</h1>
        <div class="flex items-center gap-2">
          <a class="border border-[#46A358] px-2 py-1 rounded-lg" href="#f"
            ><img src="../assets/f.svg" alt="facebook"
          /></a>
          <a class="border border-[#46A358] p-1 rounded-lg" href="#i"
            ><img src="../assets/i.svg" alt="instagram"
          /></a>
          <a class="border border-[#46A358] p-1 py-1.5 rounded-lg" href="#t"
            ><img src="../assets/t.svg" alt="twitter"
          /></a>
          <a class="border border-[#46A358] p-1 rounded-lg" href="#li"
            ><img src="../assets/li.svg" alt="linkedin"
          /></a>
          <a class="border border-[#46A358] p-1 rounded-lg py-1.5" href="#u"
            ><img src="../assets/u.svg" alt="youtube"
          /></a>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <h1 class="text-lg font-bold text-[#3D3D3D]">Social Media</h1>
        <div><img src="../assets/pay.png" width="224" alt="payment"></div>
      </div>
    </div>
  </div>
  <h1 class="py-4 text-center text-sm text-[#3D3D3D] ">© 2021 GreenShop. All Rights Reserved.</h1>
</template>

<style scoped></style>
