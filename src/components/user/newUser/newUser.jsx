// newUser.jsx
import React, { useState } from "react";
import NewUserModal from "./newUserModal";
import NewUserBtn from "./newUserBtn";

const NewUser = () => {
  const [visible, setVisible] = useState(true);

  const openModal = () => {
    setVisible(!visible);
  };

  return (
    <>
      <NewUserModal visible={visible} setVisible={setVisible} />
      <NewUserBtn openModal={openModal} />
    </>
  );
};

export default NewUser;
