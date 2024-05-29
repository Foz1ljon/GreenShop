<script>
export default {
  data() {
    return {
      menu: ["Home", "Shop", "Plant Care", "Blogs"],
      hide: "password",
    };
  },
};
</script>

<template>
  <div class="md:mb-4 sm:mb-2">
    <div class="flex items-center justify-between py-3">
      <div class="sm:hidden md:flex">
        <img src="../assets/logo.svg" alt="" />
      </div>
      <div class="md:flex gap-4 sm:hidden">
        <div v-for="(item, index) in menu" :key="index">
          <a
            class="text-[17px] focus:border-b-4 z-50 focus:border-[#46A358] focus:pb-5 focus:text-[#46A358] "
            href="#"
            >{{ item }}</a
          >
        </div>
      </div>

      <div class="flex md:items-center md:gap-3 sm:flex sm:gap-2">
        <div class="sm:relative sm:flex md:hidden">
          <button class="md:hidden sm:block sm:absolute sm:top-3.5 sm:left-[2px]">
            <svg
              width="17"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z"
                fill="#A5A5A5"
              />
            </svg>
          </button>

          <input
            class=" px-5 py-3 rounded-md bg-[#F8F8F8] outline-none"
            type="text"
            placeholder="Find Your Plants"
          />
        </div>
        <button class="md:flex sm:hidden">
          <img src="../assets/search.svg" alt="img" />
        </button>

        <button class="md:flex sm:hidden">
          <img src="../assets/cart.svg" alt="img" />
        </button>
        <button class="md:hidden sm:block bg-[#46A358] py-1 px-1 rounded-lg">
          <img src="../assets/menu.svg" alt="" />
        </button>
        <button
          class="flex items-center px-5 py-2 text-white bg-[#46A358] gap-1 rounded-lg md:flex sm:hidden"
        >
          <img src="../assets/logout.svg" alt="" /> Login
        </button>
      </div>
    </div>
    <hr class="sm:hidden md:block" />
  </div>
</template>

<style scoped></style>
