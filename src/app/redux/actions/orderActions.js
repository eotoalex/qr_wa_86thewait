export const drinkOrder = (value) => ({
    type: 'DRINKORDER',
    payload: value,
  });
  export const ingredients = (value) => ({
    type: 'INGREDIENTS',
    payload: value,
  });
  export const setScreenSize = (size) => ({
    type: 'SET_SCREEN_SIZE',
    payload: size,
  });