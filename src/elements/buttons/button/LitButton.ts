import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";
import { lg, md, sm } from "src/types/sizes";

import style from "./style.css";
import tpl from "./template.html";

interface IButtonProperties {
  variant?: "default" | "primary" | "secodary" | "delete";
  scale?: sm | md | lg;
  icon?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  label?: string;
  tooltip?: string;
  ariaLabel?: string;
  isLoadingText?: String;
  tabindex?: number;
}

@customElement("lit-button")
class LitButton extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  constructor(props?: IButtonProperties) {
    super();
    props = props || {};
    Object.assign(this, props || {});
  }

  render(): TemplateResult {
    return html`${unsafeHTML(tpl)}`;
  }
}

export { LitButton, IButtonProperties };
