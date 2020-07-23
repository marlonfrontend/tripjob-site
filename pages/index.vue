<template>
  <main>
    <div class="banner">
      <div class="container mx-auto">
        <div class="flex items-center flex-wrap">
          <div class="md:w-1/2 w-full">
          </div>
        </div>
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
</style>
