import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";

import style from "./my-element.css";
import tpl from "./my-element.html";

@customElement("my-element")
export class MyElement extends LitElement {
  constructor(args?: unknown) {
    super();
  }

  static styles = css`
    ${unsafeCSS(style)}
  `;

  render(): TemplateResult {
    return html`${unsafeHTML(tpl)}`;
  }
}
