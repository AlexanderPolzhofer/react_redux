import React from "react";

import { useSelector } from "react-redux";

import { AppContainer } from "./components/App.styles";
import DisplayUser from "./components/display-users/DisplayUsers";

import UserInputForm from "./components/user-input-form/UserInputForm";


function App() {

  const userList = useSelector((state) => state.users.value)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <AppContainer>
      <UserInputForm handleSubmit={handleSubmit} />
      <DisplayUser userList={userList} />
    </AppContainer>
  );
}

export default App;
