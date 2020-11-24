import { GetServerSideProps } from "next";
import Head from "next/head";
import { IUser } from "../models/IUser";
import styles from "../styles/Home.module.css";
import { getUsers } from "./api/getUsers";

interface IProps {
  users: IUser[];
}

const Home: React.FC<IProps> = ({ users }) => {
  return (
    <div className={styles.container}>
      {users.map((user, index) => {
        return <div key={index}>{user.name}</div>;
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getUsers();
  const users = JSON.parse(JSON.stringify(data));
  return {
    props: { users },
  };
};

export default Home;
