import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { client } = useSelector((state) => state.authClient);

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (client) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    setLoading(false);
  }, [client]);

  return { auth, loading };
};
