<template>
  <div :class="[$style.wrapper]">
    <a
      :href="preview"
      :class="[$style.preview]"
      rel="noopener noreferrer"
      target="_blank"
    >
      <IconView />
      <img :src="preview" alt="" />
    </a>
    <div :class="[$style.group]">
      <div :class="[$style.info]">
        <h1>
          <a :href="href">{{ heading }}</a>
        </h1>
        <p>{{ description }}</p>
      </div>
      <div :class="[[$style.row], 'sm:mt-[22px]', 'mt-[14px]']">
        <div :class="[$style.price]">
          <IconEthereum />
          <span>{{ price }} ETH</span>
        </div>
        <div :class="[$style.timestamp]">
          <IconClock />
          <span>{{ timestamp }}</span>
        </div>
      </div>
    </div>
    <div :class="[$style.person]">
      <div :class="[$style.avatar]">
        <img :src="person.avatar" :alt="person.name" />
      </div>
      <div class="pl-4">
        Creation of <a :href="person.href">{{ person.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import IconEthereum from '@icons/icon-ethereum.svg';
import IconClock from '@icons/icon-clock.svg';
import IconView from '@icons/icon-view.svg';

const props = defineProps<{
  href: string;
  price: number;
  heading: string;
  preview: string;
  description: string;
  timestamp: string;
  person: {
    href: string;
    avatar: string;
    name: string;
  };
}>();
</script>

<style lang="scss" module>
.wrapper {
  @apply rounded-2xl bg-very-dark-blue-card sm:max-w-[350px] max-w-[327px] px-6 pt-6 sm:pb-8 pb-6;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
}

.preview {
  @apply relative rounded-lg overflow-hidden text-white;

  svg {
    @apply absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity pointer-events-none;
  }

  &::before {
    content: '';
    @apply absolute inset-0 bg-cyan opacity-0 transition-opacity pointer-events-none;
  }

  &:hover {
    svg {
      @apply opacity-100;
    }

    &::before {
      @apply opacity-50;
    }
  }
}

.info {
  @apply space-y-4;
}

.group {
  @apply border-b border-very-dark-blue-line sm:py-6 py-4;
}

.person {
  @apply flex items-center mt-3.5 sm:text-base text-sm;
}

.avatar {
  @apply w-[33px] h-[33px] rounded-full border border-white;
}

.price,
.timestamp {
  @apply relative;

  svg {
    @apply absolute top-0.5 left-0;
  }
}
.price {
  @apply font-semibold text-cyan pl-4.5 sm:text-base text-sm;
}

.timestamp {
  @apply text-soft-blue pl-6 sm:text-base text-sm;
}

.row {
  @apply flex justify-between items-center space-x-4;
}
</style>
