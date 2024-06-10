import axios from "axios";
import { useDispatch } from "react-redux";
import { user_auth } from "../../app/slices/userAuth";

const dispatch = useDispatch();

const usersData = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/users/profile", {
      withCredentials: true,
    });
    if (res.data.success) {
      const user = res.data;
      dispatch(
        user_auth({
          success: true,
          username: user.username,
          email: user.email,
          mobileNumber: user.mobileNumber,
        })
      );
    }
  } catch (err) {
    console.error("You are not authenticate, try again!", err);
    alert("Please login");
  }
};
export { usersData };
