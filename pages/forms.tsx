import React, { useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };

  return (
    <form>
      <input
        value={username}
        onChange={onUsernameChange}
        type="text"
        placeholder="Username"
      />
      <input
        value={email}
        onChange={onEmailChange}
        type="email"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={onPasswordChange}
        type="password"
        placeholder="Password"
      />
    </form>
  );
}
