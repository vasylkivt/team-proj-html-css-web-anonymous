const openModalButtons = document.querySelectorAll('.js-open-modal');

const backdropRefs = document.querySelectorAll('.backdrop');
const closeBtnRefs = document.querySelectorAll('.modal-close-btn');

openModalButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const backdropName = this.getAttribute('data-modal');
    const backdrop = document.querySelector(
      `.backdrop[data-modal="${backdropName}"]`
    );

    backdrop.classList.remove('is-hidden');
    document.body.classList.add('modal-open');

    addAllEventListeners(backdrop);
  });
});

function onEscClick(event) {
  if (event.code === 'Escape') {
    removeAllEventListeners();
  }
}

function onBackdropClick(event) {
  if (event.target.closest('.modal')) {
    return;
  }

  removeAllEventListeners();
}

function onCloseBtnClick(event) {
  event.preventDefault();

  removeAllEventListeners();
}

function addAllEventListeners(backdrop) {
  document.addEventListener('keydown', onEscClick);
  backdrop.addEventListener('click', onBackdropClick);
  closeBtnRefs.forEach(button => {
    button.addEventListener('click', onCloseBtnClick);
  });
}

function removeAllEventListeners() {
  backdropRefs.forEach(backdrop => {
    backdrop.removeEventListener('click', onBackdropClick);
    backdrop.classList.add('is-hidden');
  });

  closeBtnRefs.forEach(button => {
    button.removeEventListener('click', onCloseBtnClick);
  });

  document.removeEventListener('keydown', onEscClick);
  document.body.classList.remove('modal-open');
}
