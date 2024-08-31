import { useState } from "react";
import img from "../assets/yo.jpg";
import Experience from "./Experience";
import { Mail, Phone } from 'lucide-react';

const Home = () => {

  const [tab, setTab] = useState("experience");

  const tabStyles: any = { //eslint-disable-line
    experience: tab === "experience" ? "bg-white text-gray-900" : "bg-blue-900 text-white hover:bg-gray-200 hover:text-black",
    projects: tab === "projects" ? "bg-white text-gray-900" : "bg-blue-900 text-white hover:bg-gray-200 hover:text-black",
  }

  const tabs = [
    { label: "Experiencia Laboral", name: "experience" },
    { label: "Proyectos", name: "projects" },
  ]

  return (
    <div className="grid grid-cols-5 tracking-wide select-none">
      <div className="bg-blue-900 flex justify-center items-center text-white text-md font-bold">Alexis Rodrigo Sanchez Vazquez</div>
      <div className="col-span-4 bg-blue-900 flex">
        {tabs.map((t, i) => (
          <div key={i} className={`text-center p-2 w-[20%] text-lg text-white cursor-pointer select-none ${tabStyles[t.name]}`}
            onClick={() => setTab(t.name)}>
            {t.label}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center p-3 bg-blue-900">
        <img src={img} height={"200px"} width={"200px"} className="rounded-lg border" />
      </div>
      {tab === "experience" &&
        <div className="col-span-4  row-span-2">
          <Experience />
        </div>
      }
      {tab === "projects" &&
        <div className="col-span-4  row-span-2">
        </div>
      }
      <div>
        <div className="p-3">
          <div className="text-center text-gray-600 text-md font-bold">Desarrollador de software</div>
        </div>
        <div className="bg-blue-900 p-5">
          <div className="text-center text-white text-sm flex items-center gap-2 p-1">
            <Phone className="w-4 h-4" />
            <span className="font-bold"> 961 633 4735</span>
          </div>
          <div className="text-center text-white text-sm flex items-center gap-2 p-1">
            <Mail className="w-4 h-4" />
            <span className="font-bold"> alex_180796@hotmail.com</span>
          </div>
        </div>
        <div className="text-center text-gray-600 text-md font-bold p-1">Acerca de mi</div>
        <div className="bg-blue-900 p-5">
          <div className="text-white text-md">
            Especialista en desarrollo de sistemas
            con mas de 5 años de experiencia, tanto
            en plataformas web como para moviles,
            tengo la capacidad para adaptarme a los
            cambios y a las nuevas tecnologias.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
