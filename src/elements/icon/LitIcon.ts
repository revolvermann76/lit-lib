import { TemplateResult } from "lit";
import { unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { LitElement, html, css } from "lit-element";

import { lg, mapSize, md, sm, xl, xs, xxl, xxxl } from "../../types/sizes";

import style from "./style.css";

// Fonts müssen für WebComponents sowohl in der Component, als auch im Head der Seite verlinkt werden. Das stellt dieser Helper sicher.
function applyFontGlobal(fontUrl): void {
  if (!document.querySelector(`link[href="${fontUrl}}"]`)) {
    document.head.append(
      Object.assign(document.createElement("link"), {
        rel: "stylesheet",
        href: fontUrl,
      }),
    );
  }
}

export interface IIconProperties {
  icon?: string;
  fontURL?: string;
  fontFace?: string;
  decorative?: boolean; // use this property if the content should not be displayed in the screen reader because it is a decorative element
  altText?: string;
  scaleFactor?: number;
  color?: string;
  size?: xs | sm | md | lg | xl | xxl | xxxl;
}

const mapSizes2Px = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 28,
};

@customElement("lit-icon")
export class LitIcon extends LitElement {
  @property()
  icon: string;

  @property()
  fontFace: string;

  @property()
  size: xs | sm | md | lg | xl | xxl | xxxl = "md";

  @property()
  scaleFactor: number = 1;

  fontURL: string =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";

  static styles = css`
    ${unsafeCSS(style)}
  `;

  constructor(props?: IIconProperties) {
    super();
    props = props || {};
    props.size = mapSize(props.size || "md");
    Object.assign(this, props || {});
    applyFontGlobal(this.fontURL);
  }

  render(): TemplateResult {
    console.log(this);
    const baseSize = `${
      mapSizes2Px[this.size || "md"] * (this.scaleFactor || 1)
    }px`;
    return html`<link rel="stylesheet" href="${this.fontURL}" />
      <span
        class="${this.fontFace || "fa-solid"} ${this.icon || "fa-cube"}"
        style="width:${baseSize}; height:${baseSize}; font-size:${baseSize};"
      />`;
  }
}
