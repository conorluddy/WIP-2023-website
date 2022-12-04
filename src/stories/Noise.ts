import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import css from "./Noise.styles";

@customElement("background-noise")
export class Noise extends LitElement {
  static styles = css;
  protected render() {
    return html`<div><slot></slot></div>`;
  }
}
