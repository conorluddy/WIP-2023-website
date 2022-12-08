import { BackgroundNoise } from "./components/BackgroundNoise/BackgroundNoise";

class HelloWorld extends HTMLElement {
  name: string;

  constructor() {
    super();
    this.name = "World";
    console.log("XX", BackgroundNoise);
  }

  // connect component
  connectedCallback() {
    this.textContent = "Hello World 2";
    this.attachShadow({ mode: "closed" });
  }

  // component attributes
  static get observedAttributes() {
    return ["name"];
  }

  // attribute change
  attributeChangedCallback(
    property: string,
    oldValue: string,
    newValue: string
  ) {
    if (oldValue === newValue) return;
    // this[property] = newValue;
  }
}

// TODO: Centralise these definers somewhere
window.customElements.define("hello-world", HelloWorld);
