// Zoom Effect
const closePopup = () => {
  popup.style.transform = "scale(0)";
  setTimeout(() => {
    popupGrandfather.style.display = "none";
  }, 300);
};

const openPopup = () => {
  popupGrandfather.style.display = "flex";

  setTimeout(() => {
    popup.style.setProperty("transform", "scale(1)", "important");
  }, 200);
};
