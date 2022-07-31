import React , {useState}from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {loginApi} from '../api/auth/login'
//Mui
import {
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import { useAuthDispatch } from "../../src/hooks/auth/useAuth";
import { setTokenApi } from "../../src/api/auth/token";
import { authenticated } from "../../src/store/action";
import { useHistory } from "react-router-dom"

const Login = () => {
  const [alerta, setAlert] = useState(false)
  const dispatch = useAuthDispatch();
  let history = useHistory()


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      const email = formData.email;
      const password = formData.password;
      try {
        const result = await loginApi({
          email,
          password,
        });
        console.log("Result del login: ", result);
        if(result.error){
          console.log('Error en el login')
          alert(`Error: `);

        }else{
          alert(`Login exitoso!`);
          setTokenApi(JSON.stringify(result));
          dispatch(authenticated(result));
          history.push("/")
        }
      } catch (error) {
        console.log("ERROR en el login de usuario", error);
      }
    },
  });

  return (
      <div>
        <Typography>LOGIN</Typography>
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

export default Login;

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
