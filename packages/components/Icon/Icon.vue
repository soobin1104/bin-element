<script setup lang="ts">
  import type { IconProps } from './type.ts';
  import { fontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { omit } from 'lodash-es';
  import { computed } from 'vue';

  defineOptions({
    name: 'BinIcon',
    inheritAttrs: false,
  });

  const props = defineProps<IconProps>();
  const filterprops = computed(() => omit(props, ['type', 'color']));
  const customstyles = computed(() => {
    return {
      color: props.color ?? void 0,
    };
  });
</script>
<template>
  <i :style="customstyles" v-bind="$attrs" class="bin-icon" :class="[`bin-icon-${props.type}`]">
    <font-awesome-icon v-bind="filterprops" />
  </i>
</template>

<style scoped></style>
