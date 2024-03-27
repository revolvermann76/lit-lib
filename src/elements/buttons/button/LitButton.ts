import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";
import { lg, md, sm } from "src/types/sizes";

import style from "./style.css";
import tpl from "./template.html";

@customElement("lit-button")
export class LitButton extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  constructor(args?: unknown) {
    super();
  }

  render(): TemplateResult {
    return html`${unsafeHTML(tpl)}`;
  }
}

export interface IButtonProperties {
  scale?: sm | md | lg;
  variant?: "default" | "primary" | "secodary" | "delete";
  icon?: string;
  fontURL?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  label?: string;
  tooltip?: string;
  ariaLabel?: string;
  isLoadingText?: String;
  tabIndex?: string;
}
