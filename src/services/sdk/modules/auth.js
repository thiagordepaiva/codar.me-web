import { fetch } from "../fetch";

export const login = async ({ username, password }) => {
  try {
    const res = await fetch({
      method: "get",
      url: "/login",
      auth: { username, password },
    });

    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
