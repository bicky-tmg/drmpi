import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUserEmail } from "../features/auth/authSlice";

export const useAuth = () => {
  const userEmail = useSelector(selectCurrentUserEmail);

  return useMemo(() => ({ userEmail }), [userEmail]);
};
