/** @format */

export default function formValidation() {
	const form = document.querySelector("#contact-form");

	if (!form) return;

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const firstName = document.querySelector("#first-name").value.trim();
		const email = document.querySelector("#email").value.trim();
		const subject = document.querySelector("#subject").value.trim();
		const message = document.querySelector("#message").value.trim();

		if (!firstName || !email || !message) {
			showToast("Please fill all required fields!", "error");
			return;
		}

		const submitBtn = form.querySelector(".fsub");

		submitBtn.disabled = true;
		submitBtn.innerHTML = `
    		<i class="ti ti-loader-2"></i> Sending...
		`;

		try {
			const response = await fetch("http://localhost:8000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName,
					email,
					subject,
					message,
				}),
			});

			const data = await response.json();

			if (data.success) {
				form.reset();
				showToast("Message sent successfully!");
				submitBtn.disabled = false;
				submitBtn.innerHTML = `
					<i class="ti ti-send"></i> Send Message
			`;
			} else {
				showToast("Failed to send message!", "error");
				submitBtn.disabled = false;
				submitBtn.innerHTML = `
        			<i class="ti ti-send"></i> Send Message
    			`;
			}
		} catch (error) {
			console.error(error);
			showToast("Server error!", "error");

			submitBtn.disabled = false;
			submitBtn.innerHTML = `
        		<i class="ti ti-send"></i> Send Message
    		`;
		}
	});
}

function showToast(message, type = "success") {
	const toast = document.createElement("div");

	toast.className = `toast ${type}`;
	toast.textContent = message;

	document.body.appendChild(toast);

	setTimeout(() => {
		toast.classList.add("show");
	}, 100);

	setTimeout(() => {
		toast.classList.remove("show");

		setTimeout(() => {
			toast.remove();
		}, 300);
	}, 3000);
}
