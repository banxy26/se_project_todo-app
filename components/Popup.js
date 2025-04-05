class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
    console.log("close method called");
  }

  setEventListeners() {
    // this one listener will handlethe close button and the modal listener
    this._popupCloseBtn.addEventListener("click", () => {
      // if the event target's classlist contains "popup__close" or "popup" then close the modal
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (evt) => {
      /* if (x || y) {
        this.close();
      }*/
    });
  }
}

export default Popup;
