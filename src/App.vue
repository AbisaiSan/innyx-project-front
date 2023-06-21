<!-- eslint-disable vue/valid-template-root -->
<script setup>
//import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav
        class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200"
      >
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <a href="/" class="flex items-center">
            <img
              src="https://innyx.com/incluir/imagens/logo_topo.png"
              class="h-8 mr-3"
              alt="Innyx Logo"
            />
          </a>
          <div class="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>
