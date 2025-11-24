import React from "react";
import styles from "./Robot.module.css";
import { appContext } from "../index";
interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <appContext.Consumer>
      {(value) => {
        return (
          <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>author: {value.username}</p>
          </div>
        );
      }}
    </appContext.Consumer>
  );
};

export default Robot;
