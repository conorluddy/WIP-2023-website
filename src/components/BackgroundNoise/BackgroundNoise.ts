// import css from "./BackgroundNoise.styles";

class BackgroundNoise extends HTMLElement {
  connectedCallback() {
    this.textContent = "Hello World!";
  }
}

window.customElements.define("background-noise", BackgroundNoise);

// export function init() {
//   console.log("init");

// }

export default BackgroundNoise;
export { BackgroundNoise };

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
