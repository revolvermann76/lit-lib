import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";

import style from "./my-element.css";
import tpl from "./my-element.html";

@customElement("my-element")
export class MyElement extends LitElement {
  _name: string = "Hallo LitElement";

  constructor(args?: unknown) {
    super();
  }

  static styles = css`
    ${unsafeCSS(style)}
  `;

  // Getter für die Eigenschaft
  @property()
  get name() {
    return this._name;
  }

  // Setter für die Eigenschaft
  set name(value) {
    const oldValue = this._name;
    this._name = value;
    this.requestUpdate("name", oldValue); // Aufruf von requestUpdate, um die Änderung zu rendern
    // Hier können Sie zusätzliche Logik ausführen, wenn der Wert gesetzt wird
    console.log("Name wurde auf:", value, "gesetzt");
  }

  render(): TemplateResult {
    //return html`${unsafeHTML(tpl)}`;
    return html`<p>${this.name}</p>`;
  }
}
