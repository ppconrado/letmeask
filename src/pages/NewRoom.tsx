import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
//import { useContext } from 'react';
//import { useContext } from 'react';
import { Button } from "../componets/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";

import "../styles/auth.scss";
//import { AuthContext } from '../contexts/AuthContext';
//import { TestContext } from '../App';
// webpack (snowpack, vite, ...)

export function NewRoom() {
  //const {value, setValue } = useContext(TestContext)
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    //console.log(newRoom);
    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        {/* <h1>{value}</h1> */}
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
