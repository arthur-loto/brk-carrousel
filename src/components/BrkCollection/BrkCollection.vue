<template>
  <BrkTitle v-bind="brkTitleArgs"></BrkTitle>
  <BrkCarousel v-bind="brkCarouselArgs">
    <template v-for="slot in slotList" :key="slot" v-slot:[slot]>
      <slot :name="slot"></slot>
    </template>
  </BrkCarousel>
</template>

<script setup>
import { useSlots, computed } from "vue";
import BrkTitle from "../BrkTitle/BrkTitle.vue";
import BrkCarousel from "../BrkCarousel/BrkCarousel.vue";

const slots = useSlots();
const props = defineProps({
  brkTitleArgs: {
    type: Object,
    required: true,
  },
  brkCarouselArgs: {
    type: Object,
    required: true,
  },
});

const slotList = computed(() => {
  return Object.keys(slots);
});
</script>