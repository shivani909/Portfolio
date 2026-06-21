/** @format */
import { saveTheme, getTheme } from "../utils/storage.js";

export default function themeToggle() {
	const button = document.querySelector("#theme-toggle");

	if (!button) return;

	const savedTheme = getTheme();

	if (savedTheme === "light") {
		document.body.classList.add("light-theme");
		button.textContent = "☀️";
	}

	button.addEventListener("click", () => {
		document.body.classList.toggle("light-theme");

		const isLight = document.body.classList.contains("light-theme");

		button.textContent = isLight ? "☀️" : "🌙";
		saveTheme(isLight ? "light" : "dark");
	});
}
