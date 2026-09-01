document.querySelectorAll('details.entry').forEach((entry) => {
  const summary = entry.querySelector('summary');
  summary.setAttribute('aria-expanded', String(entry.open));
  entry.addEventListener('toggle', () => summary.setAttribute('aria-expanded', String(entry.open)));
});
