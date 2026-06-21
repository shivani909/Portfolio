/** @format */

export default function activeNav() {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll(".nav-links a");

	function updateNav() {
		let currentSection = "";

		sections.forEach((section) => {
			const top = section.offsetTop;
			const height = section.offsetHeight;

			if (window.scrollY >= top - 200 && window.scrollY < top + height - 200) {
				currentSection = section.id;
			}
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 10
			) {
				currentSection = "contact";
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove("active");

			if (link.getAttribute("href") === `#${currentSection}`) {
				link.classList.add("active");
			}
		});
	}

	window.addEventListener("scroll", updateNav);

	updateNav();
}
