import { useContext } from "react";
import { AuthContext } from "../../Auth Provider/AuthContext";
import useAxiosSecure from "./useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const useFindRoll = () => {
  const { user, loading } = useContext(AuthContext);
  const axios = useAxiosSecure();

  const { data: Roll, isLoading } = useQuery({
    queryKey: [user?.email, "findRoll"],
    enabled: !loading,
    queryFn: async () => {
      const data = await axios.get(`/users/roll/${user.email}`);

      return data.data;
    },
  });

  return [Roll, isLoading];
};

export default useFindRoll;
