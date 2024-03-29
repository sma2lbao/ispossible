const isServer =
  typeof window === "undefined" || typeof window.customElements === "undefined";

export function createWebIcon(name: string, source: string) {
  if (isServer) return;
  if (customElements.get(name)) {
    return;
  }
  customElements.define(
    name,
    class extends HTMLElement {
      static get observedAttributes() {
        return ["classname"];
      }

      constructor() {
        // 必须首先调用 super 方法
        super();
      }

      connectedCallback() {
        // 创建影子根
        const shadow = this.attachShadow({ mode: "open" });

        const icon = document.createElement("span");
        icon.className = "is-icon";
        icon.innerHTML = source;

        const styleElement = document.createElement("style");
        styleElement.textContent = `
          :host {
            display: inline-flex;
            align-items: center;
          }
          .is-icon {
            display: inline-flex;
            align-items: center;
            color: inherit;
            line-height: 0;
            vertical-align: -.125em;
          }
          svg {
            display: inline-block;
            width: 1em;
            height: 1em;
            fill: currentcolor;
          }
       `;
        // 将创建好的元素附加到影子 DOM 上
        shadow.appendChild(icon);
        shadow.appendChild(styleElement);
      }

      attributeChangedCallback(name: string, oldValue: string, value: string) {
        if (name === "classname") {
          const icon = this.shadowRoot?.querySelector(".is-icon");
          if (icon) {
            icon.className = "is-icon" + " " + value;
          }
        }
      }
    }
  );
}
