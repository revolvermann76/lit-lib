import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";

import style from "./button.css";
import tpl from "./button.html";

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