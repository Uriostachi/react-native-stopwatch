import { START, STOP, RESET, SAVE, RESET_HISTORY } from './../constants/action'; 

const initialState = {
  isStarted: false,
  isStoped: false, 
  current: 0,
  display: '00:00:00',
  history: [
    {id: 0, value: '00:00:42'},
    {id: 1, value: '00:34:56'},
    {id: 2, value: '02:48:12'}
  ]
}

const timeFormater = time => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time % 3600 / 60);
  const seconds = time % 60;

  const formatedHours = hours >= 10 ? hours : `0${hours}`
  const formatedMinutes = minutes >= 10 ? minutes : `0${minutes}`
  const formatedSeconds = seconds >= 10 ? seconds : `0${seconds}`

  return `${formatedHours}:${formatedMinutes}:${formatedSeconds}`
}

const reducer = (state = initialState, action = {}) => {

  const { current, display, history, isStoped } = state; 

  switch (action.type) {
    
    case START:
      const newCurrent = current + 1
      const newDisplay = timeFormater(newCurrent)
      return {
        ...state,
        isStarted: true,
        current: newCurrent,
        display: newDisplay,
        isStoped: false
      }

    case STOP:
      return {
        ...state,
        isStoped: true
      }

    case RESET:
      return {
        ...state,
        isStarted: false,
        isStopped: false,
        current: 0,
        display: '00:00:00'
      }

    case SAVE:
      return {
        ...state,
        history: history.concat({id: history.length, value: display})
      }

    case RESET_HISTORY:
      return {
        ...state,
        history: []
      }

    default:
      return state;
  }
}

export default reducer;