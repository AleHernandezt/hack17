import { getCookie } from "../Authentication/login/cookies";

export const getCookieHeader = () => {
  const token = getCookie('access_token');
  return {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    token
  };
};