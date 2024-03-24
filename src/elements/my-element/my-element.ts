import { TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";

import tpl from "./my-element.html";

@customElement("my-element")
export class MyElement extends LitElement {
  constructor(args?: unknown) {
    super();
  }

  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: #f0f0f0;
    }
  `;

  render(): TemplateResult {
    return html`${unsafeHTML(tpl)}`;
  }
} 