export class Input extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({mode:"open"})

		let size = this.getAttribute("size") || "md"
		let placeholder = this.getAttribute("placeholder") || null

		this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./components/input/style.css">
			<input class="input ${size}" type="text" placeholder="${placeholder}"></input>
		`
	}
}
