export const loginApi = async ({ email, password }) => {
  try {
    const url = `http://127.0.0.1:4000/login`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error en login");
  }
};
