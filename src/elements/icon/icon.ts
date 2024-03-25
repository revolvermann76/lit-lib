import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";

import style from "./icon.css";

@customElement("lit-icon")
export class LitIcon extends LitElement {
  @property()
  icon: string = "fa-cube";

  @property()
  font: string = "fa-solid";

  @property()
  size: "small" | "medium" | "large" = "medium";

  static styles = css`
    ${unsafeCSS(style)}
  `;

  constructor(args?: unknown) {
    super();
  }

  render(): TemplateResult {
    return html`<style>
        ${unsafeHTML(
          '@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";',
        )}
      </style>
      <span class="${this.font} ${this.icon} ${this.size}" />`;
  }
}
