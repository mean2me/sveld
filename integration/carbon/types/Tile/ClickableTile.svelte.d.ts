/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ClickableTileProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]> {
  /**
   * Set to `true` to click the tile
   * @default false
   */
  clicked?: boolean;

  /**
   * Set to `true` to enable the light variant
   * @default false
   */
  light?: boolean;

  /**
   * Set the `href`
   * @default undefined
   */
  href?: string;
}

export default class ClickableTile extends SvelteComponentTyped<
  ClickableTileProps,
  {
    click: WindowEventMap["click"];
    keydown: WindowEventMap["keydown"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
  },
  { default: {} }
> {}
