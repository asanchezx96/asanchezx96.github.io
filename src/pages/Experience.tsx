import exportImage from "@/utils/exportImage"

const Experience = () => {

    const experience = [
        {
            id: 1, fecha: "Enero 2019 – noviembre 2019", empresa: "Consultoría 2CMJ", modalidad: "(presencial)",
            actividades: [
                { id: 1, descripcion: "Captura de informacion sobre mantenimientos de tuberias" },
                { id: 2, descripcion: "Desarrollo de aplicaciones para el mantenimiento de tuberias" },
            ],
            conocimientos: [
                { id: 1, img: "csharp" },
                { id: 2, img: "angular" },
                { id: 3, img: "ionic" },
                { id: 4, img: "php" },
                { id: 5, img: "mysql" },
                { id: 6, img: "sqlserver" },
            ]
        },
        {
            id: 2, fecha: "Noviembre 2020 – octubre 2021", empresa: "Cimar SC", modalidad: "(presencial)",
            actividades: [
                { id: 1, descripcion: "Desarrollo de software" },
                { id: 2, descripcion: "Diseño Gráfico" },
                { id: 2, descripcion: "Soporte técnico" },
                { id: 2, descripcion: "Instalación de redes" },
                { id: 3, descripcion: "Marketing Digital" },
            ],
            conocimientos: [
                { id: 1, img: "php" },
                { id: 2, img: "mysql" },
                { id: 3, img: "csharp" },
                { id: 5, img: "photoshop" },
            ]
        },
        {
            id: 3, fecha: "Enero 2020 – diciembre 2021", empresa: "GC Consultoría Informática", modalidad: "(remoto)",
            actividades: [
                { id: 1, descripcion: "Desarrollo de software" },
                { id: 2, descripcion: "Diseño Gráfico" },
            ],
            conocimientos: [
                { id: 1, img: "php" },
                { id: 2, img: "mysql" },
                { id: 3, img: "javascript" },
                { id: 3, img: "reactjs" },
                { id: 5, img: "photoshop" },
            ]
        },
        {
            id: 4, fecha: "Octubre 2021 – enero 2024", empresa: "Grúas Móviles del Golfo", modalidad: "(presencial) – (remoto)",
            actividades: [
                { id: 1, descripcion: "Desarrollo de software" },
                { id: 2, descripcion: "Diseño Gráfico" },
            ],
            conocimientos: [
                { id: 1, img: "php" },
                { id: 2, img: "mysql" },
                { id: 3, img: "vuejs" },
                { id: 5, img: "photoshop" },
            ]
        },
        {
            id: 5, fecha: "Octubre 2021 – enero 2024", empresa: "LarissaMX", modalidad: "(remoto) – (presencial)",
            actividades: [
                { id: 1, descripcion: "Lider de proyectos" },
                { id: 1, descripcion: "Desarrollo de software" },
                { id: 2, descripcion: "Diseño Gráfico" },
                { id: 2, descripcion: "Soporte técnico" },
            ],
            conocimientos: [
                { id: 1, img: "php" },
                { id: 2, img: "mysql" },
                { id: 3, img: "vuejs" },
                { id: 3, img: "reactjs" },
                { id: 3, img: "sqlserver" },
                { id: 3, img: "csharp" },
                { id: 5, img: "photoshop" },
            ]
        },
    ];

    return (
        <>
            {experience.map((e) => (
                <div key={e.id} className="grid grid-cols-3 cursor-pointer border-b">
                    <div className="flex items-center justify-center flex-col">
                        <div className="text-sm text-gray-400">{e.fecha}</div>
                        <div className="flex items-center gap-2 justify-center">
                            <span className="text-sm text-gray-800 font-bold"> {e.empresa}</span>
                            <div className="text-sm"> - {e.modalidad}</div>
                        </div>
                    </div>
                    <div className=" flex justify-center flex-col border-l">
                        <div className="text-sm text-gray-400 text-center"> Actividades</div>
                        <div className="list-disc m-6">
                            {e.actividades.map((act) => (
                                <li key={act.id} className="text-sm">{act.descripcion}</li>
                            ))}
                        </div>
                    </div>
                    <div className=" flex flex-col border-l">
                        <div className="text-sm text-gray-400 text-center"> Conocimientos aplicados</div>
                        <div className="flex justify-center items-center m-6">
                            {e.conocimientos.map((con) => (
                                <img key={con.id} src={exportImage(con.img)} height={"50px"} width={"50px"} />
                            ))}
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}
export default Experience