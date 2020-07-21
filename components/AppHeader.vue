<template>
  <header class="bg-primary py-4">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="logo text-white">
          test
        </div>
        <div class="flex items-center">
          <nav class="text-white">
            <ul class="flex">
              <li class="mx-2">
                <nuxt-link to="/">home</nuxt-link>
              </li>
              <li class="mx-2">
                <nuxt-link to="/preco">planos</nuxt-link>
              </li>
            </ul>
          </nav>
          <button class="hover:bg-white hover:text-secundary text-white border-solid border border-white rounded-md py-5 px-12">
            Cadastrar
          </button>
          <button class="text-white bg-secundary rounded-md py-5 px-12 ml-5">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .nuxt-link-exact-active {
    @apply text-secundary;
  }
  .navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
  }
</style>
