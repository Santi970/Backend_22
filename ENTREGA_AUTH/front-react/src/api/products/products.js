export const createProducts = async ({
  title,
  price,
  thumbnail,
  available_quantity,
  category,
  condition,
}) => {
  try {
    const url = `http://127.0.0.1:4000/api/productos`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        thumbnail,
        available_quantity,
        category,
        condition,
      }),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(`Error al registrar ${error}`);
  }
};
