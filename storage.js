//Explore Local storage and session storage with JSON

const addToLocalStorage = () => {
  const inputId = document.getElementById("storage-id");
  const id = inputId.value;
  const inputValue = document.getElementById("storage-value");
  const value = inputValue.value;

  // localStorage set item

  if (id && value) {
    localStorage.setItem(id, value);
  }

  (inputId.value = ""), (inputValue.value = "");
};
