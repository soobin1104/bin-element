import type { Component, Ref } from 'vue';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  icon?: string;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  loading?: boolean;
  nativeType?: NativeType;
  tag?: string | Component;
  autoFocus?: boolean;
  loadingIcon?: string;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e: 'click', val: MouseEvent): void;
}

export interface ButtonInstace {
  ref: Ref<HTMLButtonElement | void>;
}
