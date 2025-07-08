const selectors = {
  body: document.body,
  modalWindow: document.querySelector('.js-modal-window'),
  modalWindowText: document.querySelector('.js-modal-window-text'),
  closeModalWindowBtn: document.querySelector('.js-close-modal-window-btn'),
  modalWindowOkBtn: document.querySelector('.js-modal-window-ok-btn'),
};

/**
 * Handles the submission of the booking form.
 * Prevents the default form submission behavior, validates required fields (name and phone), shows a confirmation modal window with a personalized message, and resets the form.
 *
 * @param {SubmitEvent} evt The form submit event object
 *
 * @returns {{name: string, phone: string, message: string}} An object containing the submitted form data
 *
 * @throws {Error} If required fields (name or phone) are empty
 */

export function handlerSubmitBookingForm(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;

  const name = form.elements.name?.value.trim() || '';
  const phone = form.elements.phone?.value.trim() || '';
  const message = form.elements.message?.value.trim() || '';

  if (!name || !phone) throw new Error('Name and phone is required!');

  form.reset();

  handlerOpenModalWindow(
    `Thank you for your request, ${name}! \nOur manager will contact you shortly at ${phone} to confirm the details. \nHave a great day! 😉`
  );

  return { name, phone, message };
}

/**
 * Opens the modal window with a custom message text by removing the 'is-hidden' class and adding event listeners for closing it.
 *
 * Adds event listeners for:
 * - clicking the OK button ('modalWindowOkBtn');
 * - clicking the close button ('closeModalWindowBtn');
 * - clicking the menu backdrop ('modalWindow');
 * - pressing the Escape key.
 *
 * Also adds the 'modal-window-open' class to the <body> element to prevent background scrolling.
 *
 * @param {string} messageText The text content to display inside the modal window
 */

function handlerOpenModalWindow(messageText = '') {
  selectors.modalWindow.classList.remove('is-hidden');
  selectors.body.classList.add('modal-window-open');

  selectors.modalWindowText.textContent = messageText;

  selectors.modalWindowOkBtn.addEventListener('click', handlerCloseModalWindow);
  selectors.closeModalWindowBtn.addEventListener(
    'click',
    handlerCloseModalWindow
  );
  selectors.modalWindow.addEventListener(
    'click',
    handlerCloseModalByClickBackdrop
  );
  window.addEventListener('keydown', handlerCloseModalByEscape);
}

/**
 * Closes the modal window by adding the 'is-hidden' class and removing related event listeners.
 * Also removes the 'modal-window-open' class from the <body> to restore normal scrolling.
 */

function handlerCloseModalWindow() {
  selectors.modalWindowOkBtn.removeEventListener(
    'click',
    handlerCloseModalWindow
  );
  selectors.closeModalWindowBtn.removeEventListener(
    'click',
    handlerCloseModalWindow
  );
  selectors.modalWindow.removeEventListener(
    'click',
    handlerCloseModalByClickBackdrop
  );
  window.removeEventListener('keydown', handlerCloseModalByEscape);

  selectors.modalWindow.classList.add('is-hidden');
  selectors.body.classList.remove('modal-window-open');
}

/**
 * Handles a mouse click on the backdrop to close the modal window.
 * Calls the handlerCloseModalWindow function only if the click originated from the currentTarget element itself, not its child elements.
 *
 * @param {MouseEvent} evt The mouse event object
 */

function handlerCloseModalByClickBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    handlerCloseModalWindow();
  }
}

/**
 * Handles the Escape key press to close a modal window.
 * Calls the handlerCloseModalByEscape function if the Escape is pressed.
 *
 * @param {KeyboardEvent} evt The keyboard event object
 */

function handlerCloseModalByEscape(evt) {
  if (evt.code === 'Escape') {
    handlerCloseModalWindow();
  }
}
