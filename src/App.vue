<template>
  <main :class="[$style.wrapper]">
    <NFTPreviewCard
      href="#"
      :price="0.041"
      :preview="nftPreview"
      timestamp="3 days left"
      heading="Equilibrium #3429"
      description="Our Equilibrium collection promotes balance and calm."
      :person="{
        name: 'Jules Wyvern',
        href: '#',
        avatar,
      }"
    />
  </main>
</template>

<script setup lang="ts">
import {getImage} from '@helpers/common';
import NFTPreviewCard from '@components/NFTPreviewCard.vue';

const nftPreview = getImage('image-equilibrium.jpg');
const avatar = getImage('image-avatar.png');
</script>

<style lang="scss" module>
.wrapper {
  @apply flex justify-center items-center min-h-screen p-6;
}
</style>
