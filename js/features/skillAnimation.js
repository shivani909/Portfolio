/** @format */

export default function skillAnimation() {
	const skillSection = document.querySelector("#skills");

	if (!skillSection) return;

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				const bars = skillSection.querySelectorAll(".sk-fill");

				bars.forEach((bar) => {
					const finalWidth = bar.style.width;

					bar.style.width = "0%";

					setTimeout(() => {
						bar.style.transition = "width 1.5s ease";

						bar.style.width = finalWidth;
					}, 100);
				});

				observer.unobserve(skillSection);
			});
		},
		{
			threshold: 0.3,
		},
    );
    
    observer.observe(skillSection);
}
