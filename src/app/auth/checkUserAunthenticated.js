import jwt_decode from "jwt-decode";

export const userAuthenticated = () => {
  // Check if the user is authenticated
  const token = localStorage.getItem('token');

  if (!token) {
    // User is not authenticated
    return { authenticated: false, redirectTo: '/login' };
  }

  try {
    const decodedToken = jwt_decode(token, process.env.NEXT_PUBLIC_JWT_SECRET);

    if (decodedToken.emailConfirm) {
      // User is authenticated and email is confirmed
      if (decodedToken.isLandlord) {
        window.location.replace("/lorddashboard")
        return
      } else {
        return { authenticated: true, userId: decodedToken.id};
      }
    } else {
      window.location.replace("/confirmemail")
      // User is authenticated but email is not confirmed
      return;
    }
  } catch (error) {
    console.error('Invalid Key:', error);
    window.location.replace("/login")
    // Handle token verification errors, e.g., token expired, invalid signature, etc.
    return { authenticated: false};
  }
};
