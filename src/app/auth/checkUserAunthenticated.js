import jwt_decode from "jwt-decode";


export const userAuthenticated = () => {
  const ksj = localStorage.getItem('ksj');
  if (!ksj) {
    return { authenticated: false, redirectTo: '/login' };
  }

  try {
    const decodedToken = jwt_decode(ksj, process.env.NEXT_PUBLIC_JWT_SECRET);

    if (decodedToken.emailConfirm) {
      const userLevel = decodedToken.role
      if (userLevel === "level_0") {
        window.location.replace("/admin")
        return
      } else if(userLevel === "level_200") {
        return { authenticated: true, userId: decodedToken.id};
      }
    } else {
      window.location.replace("/confirmemail")

      return;
    }
  } catch (error) {
    // console.error('Invalid Key:', error);
    localStorage.clear()
    window.location.replace("/login")
    return { authenticated: false};
  }
};


const isAuthenticated = () => {
  const tk = localStorage.getItem("tk")
  if (tk) {
    return true
  } else {
    return false
  }
}