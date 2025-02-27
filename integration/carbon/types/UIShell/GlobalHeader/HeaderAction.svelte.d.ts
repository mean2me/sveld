/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface HeaderActionSlideTransition {
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
}

export interface HeaderActionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * Set to `true` to open the panel
   * @default false
   */
  isOpen?: boolean;

  /**
   * Specify the icon from `carbon-icons-svelte` to render
   * @default undefined
   */
  icon?: typeof import("carbon-icons-svelte").CarbonIcon;

  /**
   * Specify the text
   * Alternatively, use the named slot "text" (e.g., <div slot="text">...</div>)
   * @default undefined
   */
  text?: string;

  /**
   * Obtain a reference to the button HTML element
   * @default null
   */
  ref?: null | HTMLButtonElement;

  /**
   * Customize the panel transition (i.e., `transition:slide`)
   * Set to `false` to disable the transition
   * @default { duration: 200 }
   */
  transition?: false | HeaderActionSlideTransition;
}

export default class HeaderAction extends SvelteComponentTyped<
  HeaderActionProps,
  { click: WindowEventMap["click"]; close: CustomEvent<any> },
  { default: {}; text: {} }
> {}
