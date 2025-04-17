const selectors = {
  body: document.querySelector("body"),
  modalWindow: document.querySelector(".js-modal-window"),
  modalWindowText: document.querySelector(".js-modal-window-text"),
  closeModalWindowBtn: document.querySelector(".js-close-modal-window-btn"),
  modalWindowOkBtn: document.querySelector(".js-modal-window-ok-btn"),
};

export function handlerSubmitBookingForm(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;

  const name = form.elements.name?.value.trim() || "";
  const phone = form.elements.phone?.value.trim() || "";
  const message = form.elements.message?.value.trim() || "";

  if (!name || !phone) throw new Error("Name and phone is required!");

  form.reset();

  selectors.modalWindow.classList.remove("is-hidden");
  selectors.body.classList.add("modal-window-open");

  selectors.modalWindowText.textContent = `Thank you for your request, ${name}! \nOur manager will contact you shortly at ${phone} to confirm the details. \nHave a great day! 😉`;

  selectors.modalWindowOkBtn.addEventListener("click", handlerCloseModalWindow);
  selectors.closeModalWindowBtn.addEventListener(
    "click",
    handlerCloseModalWindow
  );
  selectors.modalWindow.addEventListener(
    "click",
    handlerCloseModalByClickBackdrop
  );
  window.addEventListener("keydown", handlerCloseModalByEscape);

  return { name, phone, message };
}

function handlerCloseModalWindow() {
  selectors.modalWindowOkBtn.removeEventListener(
    "click",
    handlerCloseModalWindow
  );
  selectors.closeModalWindowBtn.removeEventListener(
    "click",
    handlerCloseModalWindow
  );
  selectors.modalWindow.removeEventListener(
    "click",
    handlerCloseModalByClickBackdrop
  );
  window.removeEventListener("keydown", handlerCloseModalByEscape);

  selectors.modalWindow.classList.add("is-hidden");
  selectors.body.classList.remove("modal-window-open");
}

function handlerCloseModalByClickBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    handlerCloseModalWindow();
  }
}

function handlerCloseModalByEscape(evt) {
  if (evt.code === "Escape") {
    handlerCloseModalWindow();
  }
}
