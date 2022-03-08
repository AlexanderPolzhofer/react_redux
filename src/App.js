import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { AppContainer } from "./components/App.styles";

import { addUser, deleteUser } from "./features/Users";

import DisplayUser from "./components/display-users/DisplayUsers";
import UserInputForm from "./components/user-input-form/UserInputForm";


function App() {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)

  const handleSubmit = (e, name, username) => {
    e.preventDefault();
    dispatch(addUser({
      id: userList[userList.length - 1].id + 1,
      name,
      username
    }))
  }

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  }

  return (
    <AppContainer>
      <UserInputForm handleSubmit={handleSubmit} />
      <DisplayUser
        userList={userList}
        deleteUser={handleDelete}
      />
    </AppContainer>
  );
}

export default App;
