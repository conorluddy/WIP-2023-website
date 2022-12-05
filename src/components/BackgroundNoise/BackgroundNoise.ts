// import css from "./BackgroundNoise.styles";

class BackgroundNoise extends HTMLElement {
  connectedCallback() {
    this.textContent = "Hello World!";
  }
}

export function init() {
  console.log("init");
  customElements.define("background-noise", BackgroundNoise);
}

export default BackgroundNoise;

// import { LitElement, html } from "lit";
// import { customElement } from "lit/decorators.js";
// import css from "./BackgroundNoise.styles";

// @customElement("background-noise")
// export class BackgroundNoise extends LitElement {
//   static styles = css;
//   protected render() {
//     return html`<div><slot></slot></div>`;
//   }
// }
