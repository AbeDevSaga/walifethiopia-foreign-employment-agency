import React from "react";
import { FaBell } from "react-icons/fa";

function Notification() {
  // const dispatch = useDispatch<AppDispatch>();
  // const notificationList = useSelector(
  //   (state: RootState) => state.notification.notifications
  // );
  // const user = useSelector((state: RootState) => state.auth.user);
  // useEffect(() => {
  //   if (user?._id) {
  //     dispatch(fetchUserNotifications(user._id));
  //   }
  // }, [dispatch, user?._id]);

  return (
    <div className="relative color p-2">
      {/* Notification Icon */}
      <FaBell className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
      {/* Notification Badge */}
      {/* {notificationList.length > 0 && (
        <div className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {notificationList.length}
        </div>
      )} */}
      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        10
      </div>
    </div>
  );
}

export default Notification;
