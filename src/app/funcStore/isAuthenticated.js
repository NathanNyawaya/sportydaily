export const checkIsAuthenticated = async (from) => {
  try {
    const token = localStorage.getItem("ksj");
    if (token) {
      return true;
    } else {
      if(from){
        window.location.replace(`/login?rt=${from}`)
      }else{
        window.location.replace(`/login`)
      }
    }
  } catch (error) {
    console.error(error);
  }
};
