/** @format */

export default function smoothScroll() {
	document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();

			const target = document.querySelector(link.getAttribute("href"));

			target?.scrollIntoView({
				behavior: "smooth",
			});
		});
	});
}
