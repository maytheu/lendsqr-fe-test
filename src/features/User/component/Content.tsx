import axios from "axios";
import { useEffect, useState } from "react";
import { Overview } from "../../../sharedComponents/components";
import http from "../../../sharedComponents/helpers/http";
import { User } from "../../../sharedComponents/helpers/interfaces";

const Content = () => {
  const [users, setUsers]=useState<User[]>()
useEffect(()=>{
  http.get<User[]>('/users')
},[])

  return (
    <>
      <Overview />
    </>
  );
};

export default Content;
