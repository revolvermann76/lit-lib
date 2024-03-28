import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css } from "lit-element";
import { lg, md, sm } from "src/types/sizes";

import style from "./style.css";
import tpl from "./template.html";

interface IIconButtonProperties {
  scale?: sm | md | lg;
  disabled?: boolean;
  icon?: string;
  tooltip?: string;
  ariaLabel?: string;
  tabindex?: number;
}

@customElement("lit-icon-button")
class LitIconButton extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  constructor(props?: IIconButtonProperties) {
    super();
    props = props || {};
    Object.assign(this, props || {});
  }

  render(): TemplateResult {
    return html`${unsafeHTML(tpl)}`;
  }
}

export { LitIconButton, IIconButtonProperties };
