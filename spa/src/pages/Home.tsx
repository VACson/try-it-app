import React from "react";
import { ActivityIcon, Popular } from "../components";
import api_client from "../utils/api/openapi-client";
console.log("🚀 ~ file: Home.jsx ~ line 4 ~ api_client", api_client);
import axios from "axios";

function Home() {
  const onClick = async () => {
    const result = await api_client.usersControllerCreate({
      name: "vasya",
      nickname: "iiii",
      email: "string545454@mail.com",
      password: "12312312",
    });
    console.log("🚀 ~ file: Home.jsx ~ line 14 ~ onClick ~ result", result);
  };

  return (
    <div>
      <button onClick={onClick}>111</button>
      <div className="label">Discover</div>
      <br></br>
      <div className="heading">What's popular today</div>
      <br></br>
      <div className="flex--slider">
        <Popular />
      </div>
      <div className="heading">Browse all</div>
      <div className="browse flex">
        <ActivityIcon className={"smallicon"} />
        <ActivityIcon className={"smallicon"} />
        <ActivityIcon className={"smallicon"} />
        <ActivityIcon className={"smallicon"} />
      </div>
    </div>
  );
}

export default Home;
