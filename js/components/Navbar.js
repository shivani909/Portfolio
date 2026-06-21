/** @format */

export default function Navbar() {
	return `
<nav class="nav">
    <div class="nav-logo">shivani.dev</div>

    <div class="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
    </div>

    <div class="nav-actions">
        <button id="theme-toggle" class="theme-btn">
            🌙
        </button>

        <button class="nav-cta" id="hire-btn">
            Hire Me
        </button>
    </div>
</nav>
`;
}
