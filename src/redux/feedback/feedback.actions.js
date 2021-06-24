import FeedbackActionTypes from './feedback.types'

export const setFeedback = ({success, message, timeout}) => ({
  type: FeedbackActionTypes.SET_SHOW_FEEDBACK,
  payload: { success, message, timeout}
});
