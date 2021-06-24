import FeedbackActionTypes from './feedback.types'

const INITIAL_STATE = {
  message: '',
  success: true,
  timeout: 0
};

const FeedbackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FeedbackActionTypes.SET_SHOW_FEEDBACK:
      return {
        ...state,
        message: action.payload.message,
        success: action.payload.success,
        timeout: action.payload.timeout
      };
 
    default:
      return state;
  }
}
export default FeedbackReducer;
