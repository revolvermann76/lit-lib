import { customElement, property, state } from "lit/decorators.js";
import { LitElement, html, css } from "lit-element";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: #f0f0f0;
    }
  `;

  render(): unknown {
    return html` <p>Hello, LitElement!</p> `;
  }
}
