console.log("NOMIAH website loaded");

// Smooth-scroll for on-page links
document.addEventListener('click', function (e) {
	const el = e.target.closest('a[href^="#"]');
	if (!el) return;
	const href = el.getAttribute('href');
	if (href === '#' || href === '') return;
	const target = document.querySelector(href);
	if (target) {
		e.preventDefault();
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		target.focus({ preventScroll: true });
	}
});
