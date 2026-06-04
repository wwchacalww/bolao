import { CaretRight } from "phosphor-react";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Link } from "react-router-dom";

export function Home() {

  return (
    <>
      <Header
        name="COPA 2026"
        avatarUrl="https://upload.wikimedia.org/wikipedia/pt/d/d7/Logo_copa_2026.png"
      />
      <div className="py-4 flex flex-col align-middle items-center">
        <Title text="Lista de Bolões" type={1} />
      </div>

      <div className="flex flex-col items-center mb-2 gap-3">
        <Link to="/cartaxo">
          <div className="flex flex-col w-80 py-2 rounded-lg items-center justify-center bg-gray-900">
            <div className="flex flex-row w-full px-4 items-center">
              <img
                className="h-12 w-12 rounded-full"
                src={`https://upload.wikimedia.org/wikipedia/commons/7/7a/CTX1.png`}
              />

              <div className="flex flex-col pl-4 w-56 gap-1">
                <strong className="text-white font-bold text-base">Família Cartaxo</strong>
                <span className="font-semibold text-gray-400 text-sm">
                  25 participantes
                </span>
              </div>

              {/* <div className="flex justify-end w-28 text-3xl font-bold">
                <strong className="text-white"># 1º</strong>
              </div> */}
              <div className="flex justify-center items-center w-10 h-10 ml-2">
                <Link to={`/cartaxo`}>
                  <CaretRight size={32} className="text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center mb-2 gap-3">
        <Link to="/realville">
          <div className="flex flex-col w-80 py-2 rounded-lg items-center justify-center bg-gray-900">
            <div className="flex flex-row w-full px-4 items-center">
              <img
                className="h-12 w-12 rounded-full"
                src={`https://images.tcdn.com.br/img/img_prod/1154305/tulipa_para_chopp_200ml_ref_22830_cisper_763_1_53ccd0f43a2073f38e58ebaceafa7fd4.jpg`}
              />

              <div className="flex flex-col pl-4 w-56 gap-1">
                <strong className="text-white font-bold text-base">Real Ville</strong>
                <span className="font-semibold text-gray-400 text-sm">
                  11 participantes
                </span>
              </div>

              {/* <div className="flex justify-end w-28 text-3xl font-bold">
                <strong className="text-white"># 1º</strong>
              </div> */}
              <div className="flex justify-center items-center w-10 h-10 ml-2">
                <Link to={`/realville`}>
                  <CaretRight size={32} className="text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
