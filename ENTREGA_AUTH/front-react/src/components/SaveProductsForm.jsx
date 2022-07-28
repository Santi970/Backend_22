import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
//Mui
import { Button, TextField, Typography } from "@material-ui/core";
//Api
import { createProducts } from "../../src/api/products/products";

const SaveProductsForm = () => {
  const [items, setItems] = useState([]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {

      const title = formData.title
      const price = formData.price
      const thumbnail =formData.thumbnail
      const available_quantity = formData.thumbnail
      const category = formData.thumbnail
      const condition = formData.thumbnail
     

      try {
        const result = await createProducts({
          title,
          price ,
          thumbnail,
          available_quantity,
          category,
          condition
        });
        console.log("Result del crate product: ", result);
      } catch (error) {
        console.log("ERROR al guardar producto", error);
      }
    },
  });

  return (
    <div>
      <Typography>CREAR PRODUCTOS</Typography>

      <form onSubmit={formik.handleSubmit}>
      <TextField
          fullWidth
          id="title"
          name="title"
          label="title"
          type="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          style={{ margin: "20px" }}
        />
      <TextField
          fullWidth
          id="price"
          name="price"
          label="price"
          type="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          style={{ margin: "20px" }}
        />
        <TextField
          fullWidth
          id="thumbnail"
          name="thumbnail"
          label="thumbnail"
          type="thumbnail"
          value={formik.values.thumbnail}
          onChange={formik.handleChange}
          error={formik.touched.thumbnail && Boolean(formik.errors.thumbnail)}
          helperText={formik.touched.thumbnail && formik.errors.thumbnail}
          style={{ margin: "20px" }}
        />
        <TextField
          fullWidth
          id="available_quantity"
          name="available_quantity"
          label="available_quantity"
          type="available_quantity"
          value={formik.values.available_quantity}
          onChange={formik.handleChange}
          error={
            formik.touched.available_quantity &&
            Boolean(formik.errors.available_quantity)
          }
          helperText={
            formik.touched.available_quantity &&
            formik.errors.available_quantity
          }
          style={{ margin: "20px" }}
        />
        <TextField
          fullWidth
          id="category"
          name="category"
          label="category"
          type="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
          style={{ margin: "20px" }}
        />
        <TextField
          fullWidth
          id="condition"
          name="condition"
          label="condition"
          type="condition"
          value={formik.values.condition}
          onChange={formik.handleChange}
          error={formik.touched.condition && Boolean(formik.errors.condition)}
          helperText={formik.touched.condition && formik.errors.condition}
          style={{ margin: "20px" }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          style={{ margin: "20px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SaveProductsForm;

function initialValues() {
  return {
    title: "",
    price: "",
    thumbnail: "",
    available_quantity: "",
    category: "",
    condition: ""
  };
}

function validationSchema() {
  return {
    title: Yup.string().required(),
    price: Yup.string().required(),
    thumbnail: Yup.string().required(),
    available_quantity: Yup.string().required(),
    category: Yup.string().required(),
    condition: Yup.string().required(),
  };
}
