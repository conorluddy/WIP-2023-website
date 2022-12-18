const template = document.createElement("template");

template.innerHTML = `
  <style>
    @import "css/BackgroundNoise.css";
  </style>
  <slot/>
`;

class BackgroundNoise extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default () => {
  window.customElements.define("background-noise", BackgroundNoise);
};
