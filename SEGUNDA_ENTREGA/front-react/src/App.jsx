import React from "react";
import "./assets/css/App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./temaConfig";
import Routes from "./Routes/Routes";
import { useState } from "react"; //Solo sirve para primitivos y objetos simples

import { CartProvider } from "./Context/CartContext";
import { FormProvider } from "./Context/FormContext";

const App = () => {
  const [search, setSearch] = useState(null); //

  //Manejador "handlerSearch" que recibe el parametro de navBar de lo que busca la persona
  const handlerSearch = (product) => setSearch(product);

  return (
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
  );
};

export default App;
