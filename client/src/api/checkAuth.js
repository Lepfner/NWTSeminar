import { jwtDecode } from "jwt-decode";

function isTokenExpired() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const expirationTime = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      return expirationTime < currentTime;
    } catch (error) {
      console.error("Error decoding JWT token:", error);
      return true;
    }
  } else {
    return true;
  }
}

function checkToken() {
  if (isTokenExpired()) {
    return false;
  } else {
    return true;
  }
}

export default checkToken;
