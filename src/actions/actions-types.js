import { START, STOP, RESET, SAVE, RESET_HISTORY } from './../constants/action'; 

export const start = () => {
  return {
    type: START
  }
};

export const stop = () => {
  return {
    type: STOP
  }
};

export const reset = () => {
  return {
    type: RESET
  }
};

export const save = () => {
  return {
    type: SAVE
  }
};

export const resetHistory = () => {
  return {
    type: RESET_HISTORY
  }
};