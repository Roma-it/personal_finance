import FrontPage from "../pages/frontPage/FrontPage";
import Register from "../pages/register/Register";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Card from "../utilities/Card";
import RegisterForm from "../pages/registerOperation/RegisterForm";
import { balanceContext } from "../contexts/balaceContext";
import EditForm from "../pages/home/editOperation/EditForm";
import { useState } from "react";
import Categorias from "../pages/categorias/Categorias";

function App() {
  const [balance, setBalance] = useState(0);
  return (
    <balanceContext.Provider value={{ balance, setBalance }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/home">
            <Home
              children={
                <Card
                  url={"http://localhost:4000/operations/lastOps"}
                  title={"Ultimas Operaciones"}
                />
              }
            />
          </Route>
          <Route exact path="/ingreso">
            <Home
              children={
                <Card
                  url={"http://localhost:4000/operations/byType/1"}
                  title={"Operaciones de Ingresos"}
                />
              }
            />
          </Route>
          <Route exact path="/egreso">
            <Home
              children={
                <Card
                  url={"http://localhost:4000/operations/byType/2"}
                  title={"Operaciones de Egresos"}
                />
              }
            />
          </Route>
          <Route exact path="/registerOperation">
            <Home children={<RegisterForm />} />
          </Route>
          <Route exact path="/editar/:id">
            <Home children={<EditForm />} />
          </Route>
          <Route exact path="/categorias">
            <Home children={<Categorias />} />
          </Route>
        </Switch>
      </Router>
    </balanceContext.Provider>
  );
}

export default App;
