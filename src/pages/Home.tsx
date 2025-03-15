import { useState } from "react";
import img from "../assets/yo.jpg";
import Experience from "./Experience";
import { Mail, Phone } from 'lucide-react';
import CsScrollArea from "@/components/CsScrollArea/CsScrollArea";
import Projects from "./Projects";
import KnowledgeAndSkills from "./KnowledgeAndSkills";

const Home = () => {

  const [tab, setTab] = useState("experience");

  const tabStyles: any = { //eslint-disable-line
    experience: tab === "experience" ? "bg-white text-gray-800 " : "bg-blue-900 text-white hover:bg-gray-200 hover:text-black",
    projects: tab === "projects" ? "bg-white text-gray-800" : "bg-blue-900 text-white hover:bg-gray-200 hover:text-black",
    skills: tab === "skills" ? "bg-white text-gray-800" : "bg-blue-900 text-white hover:bg-gray-200 hover:text-black",
  }

  const tabs = [
    { label: "Experiencia Laboral", name: "experience" },
    { label: "Proyectos", name: "projects" },
    { label: "Conocimientos y Habilidades", name: "skills" },
  ]

  return (
    <div className="grid grid-cols-5 select-none">
      <div className="col-span-1">
        <CsScrollArea className="bg-blue-900" rest={ 0} border={false}>
          <div className="p-4 flex justify-center items-center text-white text-md font-bold">Alexis Rodrigo Sanchez Vazquez</div>
          <div className="flex justify-center items-center p-8 bg-blue-900">
            <img src={img} height={"200px"} width={"200px"} className="rounded-lg border" />
          </div>
          <div className="p-2 text-center bg-white text-gray-600 text-lg font-bold">Desarrollador de software</div>
          <div className="bg-blue-900 p-3">
            <div className="text-center text-white text-sm flex items-center gap-2 p-1">
              <Phone className="w-4 h-4" />
              <span className="font-bold"> 961 633 4735</span>
            </div>
            <div className="text-center text-white text-sm flex items-center gap-2 p-1">
              <Mail className="w-4 h-4" />
              <span className="font-bold"> alex_180796@hotmail.com</span>
            </div>
          </div>
          <div className="text-center text-gray-600 text-md font-bold p-3 bg-white">Acerca de mi</div>
          <div className="bg-blue-900 p-3">
            <div className="text-white text-md">
              Especialista en desarrollo de sistemas
              con mas de 5 años de experiencia, tanto
              en plataformas web como para moviles,
              tengo la capacidad para adaptarme a los
              cambios y a las nuevas tecnologias.
            </div>
          </div>
        </CsScrollArea>
      </div >

      <div className="col-span-4">
        <CsScrollArea className="bg-white-900" rest={2} border={false}>
          <div className="col-span-4 bg-blue-900 flex">
            {tabs.map((t, i) => (
              <div key={i} className={`text-center p-2 w-[25%] text-lg cursor-pointer select-none ${tabStyles[t.name]}`}
                onClick={() => setTab(t.name)}>
                {t.label}
              </div>
            ))}
          </div>
          {tab === "experience" &&
            <div className="col-span-4  row-span-2 bg-white">
              <Experience />
            </div>
          }
          {tab === "projects" &&
            <div className="col-span-4  row-span-2">
              <Projects />
            </div>
          }
          {tab === "skills" &&
            <div className="col-span-4  row-span-2">
              <KnowledgeAndSkills />
            </div>
          }
        </CsScrollArea>
      </div>
    </div>
  );
}

export default Home;
