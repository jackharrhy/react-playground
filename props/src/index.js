import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Testing from "./components/testing/Testing";
import Think from "./components/think/Think";
import Users from "./components/users/Users";
import Showhide from "./components/showhide/Showhide";
import Inputshow from "./components/inputshow/Inputshow";
import Valuechange from "./components/valuechange/Valuechange";
import Counter from "./components/counter/Counter";
import Userdata from "./components/userdata/Userdata";
import Addnumbers from "./components/addnumbers/Addnumbers";
import Time from "./components/time/Time";
import Modal from "./components/modal/Modal";
import FakeAPI from "./components/fakeapi/FakeAPI";

const createEelement = document.querySelector("#root");
const root = createRoot(createEelement);

root.render(
  <StrictMode>
    <Header />
    <FakeAPI />
    <Testing />
    <Think />
    <Users />
    <Showhide />
    <Inputshow />
    <Valuechange />
    <Counter />
    <Userdata />
    <Addnumbers />
    <Time />
    <Modal />
  </StrictMode>
);
