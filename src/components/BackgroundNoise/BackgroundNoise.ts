import styles from "./BackgroundNoise.styles";
const template = document.createElement("template");
template.innerHTML = `<style>${styles}</style><slot/>`;

class BackgroundNoise extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("background-noise", BackgroundNoise);

export default BackgroundNoise;
export { BackgroundNoise };
