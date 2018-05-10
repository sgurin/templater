/**
 * Replace any you tag with custom tag that you have provided
 * @example
 * // returns <span>test</span>
 * Templater.run("<div>test</div>", "<span>test</span>")
 */

let Templater = {
	run: (tag, customTag) => {

		let elements = Array.from(document.getElementsByTagName(tag));

		for (let i = 0; i <= elements.length; i++) {

			elements[i].outerHTML= customTag;

		}
		
	}
}

Templater.run("bootstrap_button", "<button class=\"btn btn-default\" type=\"submit\">Some Text</button>");