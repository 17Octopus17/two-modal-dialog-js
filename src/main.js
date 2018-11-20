(() => {
  const trigger = document.querySelectorAll('.run');
  for (let i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener('click', (event) => {
      event.preventDefault();

      const modal = document.querySelectorAll('[data-content]');
      for (let j = 0; j < modal.length; j++) {
        if (modal[j].dataset.content === trigger[i].dataset.button) {
          modal[j].classList.add('show-modal');
        }
      }
    });
  }
})();
