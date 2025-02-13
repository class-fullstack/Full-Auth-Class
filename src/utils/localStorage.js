// Save an item to localStorage
export const saveToLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

// Get an item from localStorage
export const getFromLocalStorage = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error("Error getting from localStorage", error);
    return null;
  }
};

// Delete an item from localStorage
export const deleteFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error deleting from localStorage", error);
  }
};

// Edit an item in localStorage
export const editInLocalStorage = (key, newValue) => {
  try {
    const serializedValue = JSON.stringify(newValue);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error editing in localStorage", error);
  }
};
