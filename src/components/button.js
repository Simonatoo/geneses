"use strict";
class Button extends HTMLElement {
    constructor() {
        super();
    }
    get appearance() { return this.getAttribute('appearance') || 'primary'; }
    set appearance(value) { this.setAttribute('appearance', value); }
    get size() { return this.getAttribute('size') || 'md'; }
    set size(value) { this.setAttribute('size', value); }
    static get observedAttributes() {
        return ['appearance', 'size'];
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const slot = document.createElement('slot');
        const button = document.createElement('button');
        button.appendChild(slot);
        shadow.appendChild(button);
        this.styleComp(shadow);
    }
    styleComp(shadow) {
        const sheet = new CSSStyleSheet();
        const button = shadow.querySelector('button');
        button.classList.add(this.appearance);
        button.classList.add(this.size);
        sheet.replaceSync(`
            button { 
                cursor: pointer;
                transition: 100ms;
                border-radius: 9999px;
                border-width: 1px;
                border-style: solid;
                font-weight: 400;
            }
            .sm {
                padding: 4px 12px;
            }
            .md {
                padding: 8px 16px;
            }
            .lg {
                padding: 12px 20px;
                font-size: 16px;
            }
            .primary {
                background-color: var(--color-function-primary-default);
                border-color: var(--color-function-primary-default);
                color: var(--color-contrast-light);
            }
            .primary:hover {
                background-color: var(--color-function-primary-action);
                border-color: var(--color-function-primary-action);
                color: var(--color-contrast-light);
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .primary:active {
                background-color: var(--color-function-primary-active);
                border-color: var(--color-function-primary-active);
                color: var(--color-contrast-light);
            }
        `);
        shadow.adoptedStyleSheets = [sheet];
    }
}
customElements.define('my-button', Button);
