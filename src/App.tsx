import React from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any;
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      robotGallery: [],
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>机器人在线购物平台</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
