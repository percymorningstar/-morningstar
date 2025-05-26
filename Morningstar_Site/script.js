console.log("Morningstar site initialized.");
document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', e => {
    console.log('Button clicked:', e.target.textContent);
  });
});