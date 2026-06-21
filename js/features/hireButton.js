/** @format */

export default function hireButton() {
	const button = document.querySelector("#hire-btn");
	const contact = document.querySelector("#contact");

	if (!button || !contact) return;

	button.addEventListener("click", () => {
		contact.scrollIntoView({
			behavior: "smooth",
		});
	});
}