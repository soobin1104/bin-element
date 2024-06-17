<script lang="ts" setup>
  import { ref } from 'vue';
  import type { ButtonProps, ButtonEmits, ButtonInstace } from './types';
  import { throttle } from 'lodash-es';

  defineOptions({
    name: 'BinButton',
  });

  const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button',
    useThrottle: true,
    throttleDuration: 500,
  });

  const emits = defineEmits<ButtonEmits>();

  const slots = defineSlots();

  const _ref = ref<HTMLButtonElement>();

  const handleBtnClick = (e: MouseEvent) => {
    emits('click', e);
  };

  const handleBtnClickthrottle = throttle(handleBtnClick, props.throttleDuration);

  defineExpose<ButtonInstace>({
    ref: _ref,
  });
</script>
<template>
  <component
    :is="props.tag"
    ref="_ref"
    class="bin-button"
    :disabled="disabled || loading ? true : void 0"
    :type="tag === 'button' ? nativeType : void 0"
    :class="{
      [`bin-button--${type}`]: type,
      [`bin-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading,
      'is-disabled': disabled,
    }"
    @click="(e: MouseEvent) => (useThrottle ? handleBtnClickthrottle(e) : handleBtnClick(e))"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
  @import './style.css';
</style>
