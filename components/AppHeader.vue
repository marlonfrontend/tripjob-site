<template>
        <header class="py-6" :class="{ 'fixed': fixed }">
            <div class="container mx-auto">
                <div class="flex justify-between items-center">
                    <div class="logo text-white">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M36 0L0 20.25L11.5049 24.5111L29.2501 7.87502L15.7525 26.0844L15.7635 26.0885L15.75 26.0844V36.0001L22.2019 28.4729L30.3751 31.5001L36 0Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="flex items-center">
                        <nav class="text-white mr-3">
                            <ul class="flex">
                                <li class="mx-4">
                                    <nuxt-link to="/" class="font-sans hover:text-secundary">Home</nuxt-link>
                                </li>
                                <li class="mx-4">
                                    <nuxt-link to="/produto" class="font-sans hover:text-secundary">Produto</nuxt-link>
                                </li>
                                <li class="mx-4">
                                    <nuxt-link to="/solucoes" class="font-sans hover:text-secundary">Soluções</nuxt-link>
                                </li>
                                <li class="mx-4">
                                    <nuxt-link to="/precos" class="font-sans hover:text-secundary">Preços</nuxt-link>
                                </li>
                            </ul>
                        </nav>
                        <div class="mr-1">
                            <button class="font-sans text-white hover:bg-white hover:text-secundary border-solid border border-white rounded-md py-4 px-12 ml-3 mr-3">Entrar</button>
                            <button class="font-sans text-white bg-secundary hover:bg-white hover:text-primary rounded-md py-4 px-10">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    props: {
        fixed: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
header {
    @apply absolute w-full;
    z-index: 2;
    &.fixed {
        @apply bg-primary fixed w-full;
    }
}
.nuxt-link-exact-active {
    @apply text-secundary;
}
</style>
