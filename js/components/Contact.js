export default function Contact() {
	return `<section
				id="contact"
				class="sec"
				style="background: rgba(6, 8, 15, 0.98)"
			>
				<div class="sec-tag">Get In Touch</div>
				<div class="sec-h">Let's Build Together</div>
				<div class="contact-grid">
					<div>
						<p
							style="
								font-size: 13px;
								color: #334155;
								line-height: 1.7;
								margin-bottom: 24px;
							"
						>
							Open to senior Flutter roles, freelance projects, and interesting
							mobile app collaborations. Based in Raipur — fully open to remote.
						</p>
						<div class="ci">
							<div class="ciicon">
								<i class="ti ti-mail" aria-hidden="true"></i>
							</div>
							<div>
								<div class="ci-l">Email</div>
								<div class="ci-v">code.shivani09@gmail.com</div>
							</div>
						</div>
						<div class="ci">
							<div class="ciicon">
								<i class="ti ti-map-pin" aria-hidden="true"></i>
							</div>
							<div>
								<div class="ci-l">Location</div>
								<div class="ci-v">Raipur, Chhattisgarh · Remote friendly</div>
							</div>
						</div>
						<div class="ci">
							<div class="ciicon">
								<i class="ti ti-brand-github" aria-hidden="true"></i>
							</div>
							<div>
								<div class="ci-l">GitHub</div>
								<div class="ci-v">github.com/shivani909</div>
							</div>
						</div>
						<div class="ci">
							<div class="ciicon">
								<i class="ti ti-brand-linkedin" aria-hidden="true"></i>
							</div>
							<div>
								<div class="ci-l">LinkedIn</div>
								<div class="ci-v">linkedin.com/in/shivani-pandey-6aa85b193</div>
							</div>
						</div>
					</div>
					<form id="contact-form" class="cform">
						<div class="frow">
							<div class="ff">
								<label>First name</label
								><input
									id="first-name"
									class="finput"
									type="text"
									placeholder="Jane"
								/>
							</div>
							<div class="ff">
								<label>Last name</label
								><input
									id="last-name"
									class="finput"
									type="text"
									placeholder="Doe"
								/>
							</div>
						</div>
						<div class="ff">
							<label>Email</label
							><input
								id="email"
								class="finput"
								type="email"
								placeholder="jane@company.com"
							/>
						</div>
						<div class="ff">
							<label>Subject</label
							><input
								id="subject"
								class="finput"
								type="text"
								placeholder="Flutter project inquiry..."
							/>
						</div>
						<div class="ff">
							<label>Message</label
							><textarea
								id="message"
								class="finput fta"
								placeholder="Tell me about your project..."
							></textarea>
						</div>
						<button type="submit" class="fsub">
							<i class="ti ti-send" aria-hidden="true"></i>Send Message
						</button>
					</form>
				</div>
			</section>`;
}