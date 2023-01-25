import React from "react";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();

  React.useEffect(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    router.replace("/auth/login");
  }, [router]);

  return null;
}
