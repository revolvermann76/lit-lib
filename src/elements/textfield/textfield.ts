import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";

import style from "./textfield.css";
import tpl from "./textfield.html";

@customElement("lit-textfield")
export class LitTextfield extends LitElement {
  @property()
  size: "small" | "medium" | "large" = "medium";

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
