/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SearchProps {
  /**
   * @default false
   */
  small?: boolean;

  /**
   * Specify the size of the search input
   * @default "xl"
   */
  size?: "sm" | "lg" | "xl";

  /**
   * Set to `true` to display the skeleton state
   * @default false
   */
  skeleton?: boolean;

  /**
   * Set to `true` to enable the light variant
   * @default false
   */
  light?: boolean;

  /**
   * Set to `true` to disable the search input
   * @default false
   */
  disabled?: boolean;

  /**
   * Specify the value of the search input
   * @default ""
   */
  value?: string;

  /**
   * Specify the `type` attribute of the search input
   * @default "text"
   */
  type?: string;

  /**
   * Specify the `placeholder` attribute of the search input
   * @default "Search..."
   */
  placeholder?: string;

  /**
   * Specify the `autocomplete` attribute
   * @default "off"
   */
  autocomplete?: "on" | "off";

  /**
   * Set to `true` to auto focus the search element
   * @default false
   */
  autofocus?: boolean;

  /**
   * Specify the close button label text
   * @default "Clear search input"
   */
  closeButtonLabelText?: string;

  /**
   * Specify the label text
   * @default ""
   */
  labelText?: string;

  /**
   * Set an id for the input element
   * @default "ccs-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Obtain a reference to the input HTML element
   * @default null
   */
  ref?: null | HTMLInputElement;
}

export default class Search extends SvelteComponentTyped<
  SearchProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    change: WindowEventMap["change"];
    input: WindowEventMap["input"];
    focus: WindowEventMap["focus"];
    blur: WindowEventMap["blur"];
    keydown: WindowEventMap["keydown"];
    clear: CustomEvent<any>;
  },
  {}
> {}
