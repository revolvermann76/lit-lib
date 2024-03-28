import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { LitElement, html, css } from "lit-element";

import { lg, mapSize, md, sm } from "../../../types/sizes";

import style from "./style.css";

interface ICheckboxProperties {
  scale?: sm | md | lg;
  labelPos?: "left" | "right";
  disabled?: boolean;
  label?: string;
  readOnly?: boolean;
  ariaLabel?: string;
  tooltip?: string;
  checked?: boolean | "undefined";
  inputId?: string | number;
  name?: string;
  value?: unknown;
  tabindex?: number;
}

@customElement("lit-checkbox")
class LitCheckbox extends LitElement implements ICheckboxProperties {
  @property()
  scale?: sm | md | lg;

  @property()
  checked: boolean;

  @property({ type: Boolean })
  disabled?: boolean;

  @property()
  label?: string;

  @property({ type: Boolean })
  readOnly?: boolean;

  @property()
  name: string;

  tooltip?: string;
  inputId: string | number;
  labelPos?: "left" | "right";
  value: undefined;

  static styles = css`
    ${unsafeCSS(style)}
  `;

  constructor(props?: ICheckboxProperties) {
    super();
    props = props || {};
    props.inputId = props.inputId || "id" + crypto.randomUUID();
    props.checked =
      typeof props.checked === "undefined"
        ? false
        : typeof props.checked === "boolean"
          ? props.checked
          : "undefined";

    props.disabled =
      typeof props.disabled === "boolean" ? props.disabled : false;

    props.label = props.label || "";
    props.labelPos = props.labelPos || "right";
    props.name = props.name || "";
    props.readOnly =
      typeof props.readOnly === "boolean" ? props.readOnly : false;

    props.scale = props.scale ? (mapSize(props.scale) as sm | md | lg) : "md";
    Object.assign(this, props || {});
  }

  render(): TemplateResult {
    return html`<div class="wrapper ${this.scale} ${this.disabled}">
      <input
        type="checkbox"
        id="${this.inputId}"
        name="${this.name}"
        aria-label="${this.name}"
        aria-checked="${typeof this.checked === "boolean"
          ? ((this.checked + "") as "true" | "false")
          : "undefined"}"
        class="checkbox"
      />
      <label for="${this.inputId}" class="${this.labelPos}"
        >${this.label}</label
      >
    </div>`;
  }
}

export { LitCheckbox, ICheckboxProperties };
