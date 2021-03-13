import { Route, Switch } from "react-router";
import styles from "./App.module.css";
import NavigationLayout from "./Shared/NavigationLayout";
import ShowProducts from "./Products/ShowProducts";
import PostProduct from "./Products/PostProduct";

const App = () => {
  return (
    <div className={styles.App}>
      <NavigationLayout></NavigationLayout>
      <Switch>
        <Route path="/addNewProduct" component={PostProduct}></Route>
        <Route path="/" component={ShowProducts}></Route>
      </Switch>
    </div>
  );
};

export default App;
