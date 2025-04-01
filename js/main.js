const selectors = {
  bookingContainer: document.querySelector(".js-booking-container"),
  bookingBtns: document.querySelectorAll(".js-booking-btn"),
};

selectors.bookingBtns.forEach((btn) => {
  btn.addEventListener("click", handlerClickBookingBtn);
});

function handlerClickBookingBtn() {
  selectors.bookingContainer.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
