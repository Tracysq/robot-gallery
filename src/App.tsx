import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {
  username?: string
}

interface State {
  robotGallery: any[];
  count: number;
}
const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `点击了${count}次`;
  }, [count]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRobotGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>机器人在线购物平台</h1>
      </div>
      <h2>{props.username}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {!error || (error !== "" && <div>网站差错：{error}</div>)}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r) => (
            <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      ) : (
        <h2>loading 加载中</h2>
      )}
    </div>
  );
};

export default App;
