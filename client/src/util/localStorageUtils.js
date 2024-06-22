// Middleware to save state to localStorage
export const saveStateMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem("tabControlsState", JSON.stringify(state.tabControls));
  return result;
};

// Function to load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tabControlsState");
    if (serializedState === null) {
      return undefined;
    }
    return { tabControls: JSON.parse(serializedState) };
  } catch (err) {
    return undefined;
  }
};
