import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";
import { lg, md, sm } from "src/types/sizes";

import style from "./style.css";
import tpl from "./template.html";

interface ITextfieldProperties {
  scale?: sm | md | lg;
  icon?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  readonly?: boolean;
  tooltip?: string;
  ariaLabel?: string;
  inputId?: string | number;
  isRequired?: boolean;
  tabindex?: number;
}

@customElement("lit-textfield")
class LitTextfield extends LitElement {
  @property()
  size: "small" | "medium" | "large" = "medium";

  static styles = css`
    ${unsafeCSS(style)}
  `;

  constructor(props?: ITextfieldProperties) {
    super();
    props = props || {};
    Object.assign(this, props || {});
  }

  render(): TemplateResult {
    return html`${unsafeHTML(tpl)}`;
  }
}

export { LitTextfield, ITextfieldProperties };
