<template>
  <main>
    <div class="banner">
      <div class="container mx-auto">
        <div class="flex items-center flex-wrap">
          <div class="md:w-1/2 w-full">
            <h1 class="relative pt-40 text-white text-5xl font-sans font-hairline">Soluções de viagens<br/>para empresas</h1>
            <h3 class="relative pt-5 text-white text-base font-sans font-hairline">Plataforma "ponta a ponta" com gestão de viagens e despesas em uma única solução. Economize tempo e dinheiro com hotéis, passagens aéreas e aluguéis de carro.</h3>
            <button class="relative font-sans text-white bg-secundary hover:bg-white hover:text-primary rounded-md py-4 px-10 mt-5">Cadastrar</button>
          </div>
        </div>
      </div>
      <div class="mx-auto relative bg-gray-400 flex flex-row">
        <nuxt-link to="/rockcontent"><img class="logosbanner relative" src="~assets/img/logo_rockcontent.jpg"/></nuxt-link>
        <nuxt-link to="/sambatech"><img class="logosbanner relative" src="~assets/img/logo_sambatech.jpg"/></nuxt-link>
        <nuxt-link to="/rockcontent"><img class="logosbanner relative" src="~assets/img/logo_rockcontent.jpg"/></nuxt-link>
        <nuxt-link to="/sambatech"><img class="logosbanner relative" src="~assets/img/logo_sambatech.jpg"/></nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.banner {
  background-color: #0e1638;
  height: 75vh;
  position: relative;
  &::before {
    content: "";
    background: url(~assets/img/banner.jpg) no-repeat center;
    opacity: 0.25;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.logosbanner {
  opacity: .6;
}
.logosbanner:hover{
  opacity: 100;
}
</style>
