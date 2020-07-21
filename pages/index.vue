<template>
  <main>
    <div class="banner">
      <div class="container mx-auto">
        <div class="flex items-center flex-wrap">
          <div class="md:w-1/2 w-full">
            <h1 class="text-5xl"></h1>
          </div>
        </div>
      </div>
    </div>

    <button class="bg-secundary" @click="fn">
      teste
    </button>

    <div class="produtos" v-if="value">
      <div class="container mx-auto">
        <ul class="flex flex-wrap">
          <li v-for="(item, index) in 8" :key="index">
            <h2>teste</h2>
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNDheRTiCdtRy0WiLOVW_5JzvP1Hy0N8V5mLnmyrkMOoJFGG9XVzW-DTY_cUAk1UVEUjQJ2wYbs4YmZ2nnl0gkf0uSvg_FLyQtE5TOWXoN&usqp=CAE" alt="">
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    value: true
  }),
  methods: {
    fn () {
      this.value = !this.value;
    }
  }
}
</script>

<style>

</style>
