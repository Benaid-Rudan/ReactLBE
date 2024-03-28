import { httpSmartClient } from "./httpClient";

import loggedStore from "../stores/LoggedStore";
import { jwtDecode } from "jwt-decode";

const baseName = "Access";

const AuthService =  {
  signIn: async (email, password) => {
    try {
      const response = await httpSmartClient.post(`/${baseName}/SignIn`, { email, password });
      if (response.data.token) {
        loggedStore.UpdateCurrentUser(response.data.token)
        return response.data.token;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  },

  signUp: async (data) => {
    try {
      const response = await httpSmartClient.post(`/${baseName}/SignUp`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  },

  signOut: () => {
   loggedStore.RemoveCurrentUser();
  },

  getCurrentUser: () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        return decoded;
      }
    }
    return null;
  },
};
export default AuthService;


