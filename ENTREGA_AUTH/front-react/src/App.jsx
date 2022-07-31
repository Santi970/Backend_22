import React, { useEffect } from "react";
import "./assets/css/App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./temaConfig";
import Routes from "./Routes/Routes";
import { useState } from "react"; //Solo sirve para primitivos y objetos simples
import { AuthContext } from "../src/store/Context";
import { useAuthDispatch } from "../src/hooks/auth/useAuth";
import { authenticated } from "../src/store/action";
import { CartProvider } from "./Context/CartContext";
import { FormProvider } from "./Context/FormContext";
import { getTokenApi } from "../src/api/auth/token";

const App = () => {
  const [search, setSearch] = useState(null); //
  const [auth, setAuth] = useState(null); //
  const dispatch = useAuthDispatch();

  //Manejador "handlerSearch" que recibe el parametro de navBar de lo que busca la persona
  const handlerSearch = (product) => setSearch(product);

  useEffect(() => {
    const user = getTokenApi();

  console.log('a verr', user)
    if (user) {
      console.log("ESTE ES EL USER", user);
      dispatch(authenticated(user));
    } else {
      console.log("ESTE ES EL USER", user);
      dispatch(authenticated(null));
    }
  }, [dispatch]);

  console.log('a verr')

  return (
    <AuthContext>
      <CartProvider>
        <FormProvider>
          <div className="App">
            <section className="App-section-a">
              <ThemeProvider theme={theme}>
                {auth}
                <Routes search={search} handlerSearch={handlerSearch} />{" "}
                {/*pasamos por props a los hijos*/}
              </ThemeProvider>
            </section>
          </div>
        </FormProvider>
      </CartProvider>
    </AuthContext>
  );
};

export default App;
