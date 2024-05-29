import axios from "axios";

export function fetchProfile() {
  return axios.get("https://auth-ivbz.onrender.com/profile", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}
