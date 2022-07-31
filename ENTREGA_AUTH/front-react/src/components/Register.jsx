import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
//Mui
import { Button, TextField, Typography } from "@material-ui/core";
//Api
import { registerUser } from "../../src/api/auth/register";

const Register = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      const email = formData.email;
      const password = formData.password;
      try {
        const result = await registerUser({
          email,
          password,
        });
        console.log("Result del register: ", result);
      } catch (error) {
        console.log("ERROR en el registro de usuario", error);
      }
    },
  });

  return (
    <div>
      <Typography>REGISTER</Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          variant="standard"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{ margin: "20px" }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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

export default Register;

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  };
}
