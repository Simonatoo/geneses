export class Field extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({mode:"open"})

		let size = this.getAttribute("size") || "md"
		let placeholder = this.getAttribute("placeholder") || null

		this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./components/field/style.css">
			<div class="field ${size}">
				<label>Label</label>
				<label>*</label>
			</div>
			<gen-input placeholder="${placeholder}" size="${size}"/>
		`
	}
}
