document.querySelectorAll('[data-set-theme]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.candidate-preview').dataset.theme = button.dataset.setTheme;
    document.querySelectorAll('[data-set-theme]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});
