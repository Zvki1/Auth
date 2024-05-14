import axios from "axios";

export function fetchProfile() {
    return axios
      .get("http://localhost:8000/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  }