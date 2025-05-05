document.addEventListener('DOMContentLoaded', () => {
  const messageEl = document.getElementById('message');
  let state = 'initial';

  messageEl.addEventListener('click', () => {
    if (state === 'initial') {
      messageEl.textContent = 'YES!';
      state = 'yes';
    } else {
      messageEl.textContent = 'Did this deploy?';
      state = 'initial';
    }
  });
});