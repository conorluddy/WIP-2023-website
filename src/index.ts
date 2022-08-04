// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        :host {
          width: 100vw;
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
      </style>
      <slot></slot>
    `;

    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Define the new element
customElements.define("popup-info", PopUpInfo);
