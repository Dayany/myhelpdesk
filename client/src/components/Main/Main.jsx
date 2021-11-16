import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "../../components/Users/Users";
import Departments from "../../components/Departments/Departments";
import AuthenticatedRoute from "../AuthUsers/AuthenticatedRoute";
import Equipments from "../../components/Equipments/Equipments";
import Jobs from "../../components/Jobs/Jobs";
import MainDashboard from "./MainDashboard";

const Main = () => {
  const isLoggedIn = useSelector((state) => state.authUser.isLoggedIn);
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact component={MainDashboard} />

          <AuthenticatedRoute
            path="/users"
            component={Users}
            isLoggedIn={isLoggedIn}
          />
          <AuthenticatedRoute
            path="/departments"
            component={Departments}
            isLoggedIn={isLoggedIn}
          />
          <AuthenticatedRoute
            path="/equipments"
            component={Equipments}
            isLoggedIn={isLoggedIn}
          />
          <AuthenticatedRoute
            path="/Jobs"
            component={Jobs}
            isLoggedIn={isLoggedIn}
          />
        </Switch>
      </Router>
    </main>
  );
};

export default Main;
