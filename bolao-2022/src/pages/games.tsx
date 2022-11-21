import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { AuthContext } from "../contexts/AuthContext";

export function Games() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      console.log("não logado");
      // navigate("/");
    } else {
      console.log("logado");
    }
  }, []);

  // console.log(user.email);
  return (
    <>
      <Header
        name="COPA 2022"
        avatarUrl="https://logospng.org/download/copa-do-mundo-qatar-2022/logo-copa-do-mundo-qatar-2022-256.png"
      />
      <div className="py-4 flex flex-col align-middle items-center">
        <Title text="GAMES" type={1} />
        <h1>{user?.email}</h1>
      </div>

      <div className="flex flex-col items-center mb-2 gap-3"></div>
    </>
  );
}
