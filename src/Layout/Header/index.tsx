import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import { socket } from "../../constants";

const webSocket = io(socket);

const Header: FC = () => {
  const [character, setCharacter] = useState('');

  const sendChar = (char: string) => {
    setCharacter(char);
    webSocket.emit("sendChar", char);
  };

  return (
    <header>
      <Link to="/">Inicio</Link>
      <Link to="/options" onClick={() => sendChar('r')}>Opciones</Link>
    </header>
  );
};

export default Header;
