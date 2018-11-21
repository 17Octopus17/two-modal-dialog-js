(() => {
  const modal = document.querySelector(".modal");
  const uninstallButton = document.querySelector(".modal__uninstall");
  const installButton = document.querySelector(".modal__install");

  const toggleModal = function() {
    modal.classList.toggle("show-modal");
  }
  const trigger = document.querySelectorAll('.run');
    for (let i = 0; i < trigger.length; i++) {
      trigger[i].addEventListener('click', (event) => {
        event.preventDefault();

        const modal = document.querySelectorAll('[data-content]');
        for (let j = 0; j < modal.length; j++) {
          if (modal[j].dataset.content === trigger[i].dataset.button) {
            modal[j].classList.add('show-modal');
          } else {
            modal[j].classList.remove('show-modal');
          }
        } 
      });
  }
  const btns = document.querySelectorAll('.button');
  for (let k = 0; k < btns.length; k++) {
    btns[k].addEventListener('click', toggleModal);
  }

  function message ()  {
    setTimeout(() => alert('Shazam were removed from your computer'), 0);
  }

  function installMessage () {
    setTimeout(() => alert('Shazam were installed on your computer'), 0);
  }

  uninstallButton.addEventListener("click", message);
  installButton.addEventListener("click", installMessage);
})();
