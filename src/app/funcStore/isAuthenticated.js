import Link from "next/link"

export const checkIsAuthenticated = async () => {

  try {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      window.location.replace("/auth/login")
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};
