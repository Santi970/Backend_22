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
  const [auth, setAuth] = useState(false); //
  const dispatch = useAuthDispatch();

  //Manejador "handlerSearch" que recibe el parametro de navBar de lo que busca la persona
  const handlerSearch = (product) => setSearch(product);

  useEffect(() => {
    const user = getTokenApi();

    if (user) {
      console.log("Esta authenticado", user);
      dispatch(authenticated(user));
      setAuth(true);
    } else {
      console.log("No esta authenticado", user);
      dispatch(authenticated(null));
    }
  }, [dispatch]);

  console.log("a verr");

  return (
    <AuthContext>
      <CartProvider>
        <FormProvider>
          <div className="App">
            <section className="App-section-a">
              <ThemeProvider theme={theme}>
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
