<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  menus: Array,
  siteUrl: String,
});

const isOpen = ref(false);

const drawer = () => (isOpen.value = !isOpen.value);

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27 && isOpen.value) isOpen.value = false;
  });
});
</script>

<template>
  <div class="w-full h-16 flex items-center mb-70 shadow-lg bg-menuDark">
    <!-- logo part -->
    <div class="container mx-auto float-root">
      <div class="float-left mt-0">
        <a :href="siteUrl">
          <div class="flex h-16 items-center">
            <img
              src="/img/assets/tangobucolico_logo_rose.png"
              width="50"
              height="auto"
              alt="Logo de Tango Bucolico"
              class="ml-2 md:ml-0"
            />

            <div class="title-site ml-4 text-white text-3xl font-bold">
              Tango Bucolico
            </div>
          </div>
        </a>
      </div>

      <!-- Horizontal menu -->
      <div class="flex h-16 items-center float-right mr-0 md:mr-4">
        <div class="hidden md:block md:flex md:justify-between md:bg-menu">
          <div
            class="flex hidden md:flex md:items-center order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul
                class="md:flex h-full items-center justify-between text-base text-white"
              >
                <li v-for="menu in menus" :key="menu.id">
                  <a
                    class="no-underline uppercase text-customGreenDark hover:text-customBlueDark font-semibold text-lg px-4 lg:ml-2"
                    :href="menu.url"
                    >{{ menu.title }}</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="float-right items-center mt-3 mr-2 md:ml-0">
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <button
            class="text-customGreenDark"
            aria-label="Open Menu"
            @click="drawer"
          >
            <svg
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </label>

        <input class="hidden" type="checkbox" id="menu-toggle" />
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="-ml-64 transform text-center bg-primary text-white top-0 left-0 w-64 bg-menu fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 pt-4"
      :class="isOpen ? 'translate-x-0 ml-0' : '-translate-x-full'"
    >
      <a :href="siteUrl">
        <img
          src="/img/assets/tangobucolico_logo_detour.png"
          width="100"
          height="auto"
          alt="Logo de Tango Bucolico"
          class="logo-white mx-auto"
        />
      </a>

      <nav>
        <ul class="mt-4">
          <li
            v-for="(menu, index) in menus"
            :key="index"
            class="font-semibold text-xl py-2 px-2 text-center list-none font-semi-bold"
            @click="isOpen = false"
          >
            <a :href="menu.url">{{ menu.title }}</a>
          </li>
        </ul>
      </nav>

      <div class="fixed bottom-0 w-full"></div>
    </aside>
  </div>
</template>

<style scoped></style>
