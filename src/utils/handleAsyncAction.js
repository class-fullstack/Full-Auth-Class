import { showErrorToast } from "./toastNotifications";

const handleAsyncAction = (
  apiCall,
  pendingType,
  successType,
  rejectedType,
  onSuccess = () => {}
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: pendingType });

      const response = await apiCall();
      dispatch({ type: successType, payload: response.data });
      onSuccess(response.data);
    } catch (error) {
      dispatch({ type: rejectedType, payload: error });
      return showErrorToast(error?.response?.data?.message);
    }
  };
};

export default handleAsyncAction;
