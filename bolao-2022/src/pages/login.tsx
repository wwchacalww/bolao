import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useContext(AuthContext);

  const handleLogin = async () => {
    const data = {
      email,
      password,
    };
    await signIn(data);
  };
  return (
    <>
      <Header
        name="COPA 2022"
        avatarUrl="https://logospng.org/download/copa-do-mundo-qatar-2022/logo-copa-do-mundo-qatar-2022-256.png"
      />
      <div className="py-4 flex flex-col align-middle items-center">
        <Title text="LOGIN" type={1} />
      </div>

      <div className="flex flex-col items-center mb-2 gap-3">
        <input
          type="email"
          className="h-12 w-72 rounded-md px-2 font-bold"
          placeholder="e-mail"
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <input
          type="password"
          className="h-12 w-72 rounded-md px-2 font-bold"
          placeholder="senha"
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button
          onClick={handleLogin}
          className="h-12 w-72 rounded-md bg-green-500 cursor-pointer font-bold text-white"
        >
          LOGAR
        </button>
      </div>
    </>
  );
}
