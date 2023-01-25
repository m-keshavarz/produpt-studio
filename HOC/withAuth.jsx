import { useRouter } from "next/router";
import isClient from "../config/isClient";

const withAuth = WrappedComponent => {
  const MyComponent = props => {
    // checks whether we are on client / browser or server.
    const Router = useRouter();
    if (isClient) {
      const accessToken = localStorage.getItem("access_token");

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/auth/login");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };

  return MyComponent;
};

export default withAuth;
