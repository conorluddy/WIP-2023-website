import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./Noise.styles";

@customElement("background-noise")
export class Noise extends LitElement {
  static styles = styles;
  protected render() {
    return html`<div><slot></slot></div>`;
  }
}
