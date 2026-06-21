/** @format */

export default function projectReveal() {
	const cards = document.querySelectorAll(".pj");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const card = entry.target;

					const index = [...cards].indexOf(card);

					setTimeout(() => {
						card.classList.add("show");
					}, index * 150);
				}
			});
		},

		{
			threshold: 0.2,
		},
	);

	cards.forEach((card) => {
		observer.observe(card);
	});
}
