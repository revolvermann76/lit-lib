import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { LitElement, html, css } from "lit-element";

import style from "./style.css";

@customElement("lit-icon")
export class LitIcon extends LitElement {
  @property()
  icon: string = "fa-cube";

  @property()
  font: string = "fa-solid";

  @property()
  size: "small" | "medium" | "large" = "medium";

  fontUrl =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";

  static styles = css`
    ${unsafeCSS(style)}
  `;

  constructor(props?: IIconProperties) {
    super();

    if (!document.querySelector(`link[href="$this.fontUrl}"]`)) {
      document.head.append(
        Object.assign(document.createElement("link"), {
          rel: "stylesheet",
          href: this.fontUrl,
        }),
      );
    }

    if (props) {
      Object.assign(this, props);
    }
  }

  render(): TemplateResult {
    return html`<link rel="stylesheet" href="${this.fontUrl}" />
      <span class="${this.font} ${this.icon} ${this.size}" />`;
  }
}

export interface IIconProperties {
  size?: "small" | "medium" | "large";
  icon?: string;
  fontURL?: string;
}
