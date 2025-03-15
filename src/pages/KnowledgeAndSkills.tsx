import CsScrollArea from "@/components/CsScrollArea/CsScrollArea";
import exportImage from "@/lib/exportImage"

const KnowledgeAndSkills = () => {

    const knowledge = [
        {
            id: 1, name: "Lenguajes de Programación",
            items: [
                { id: 1, name: "C#", img: "csharp" },
                { id: 2, name: "PHP", img: "php" },
                { id: 3, name: "Javascript", img: "javascript" },
                { id: 4, name: "Visual Basic", img: "visualbasic" },
            ]
        },
        {
            id: 1, name: "Frameworks y Librerías",
            items: [
                { id: 1, name: "ReactJS", img: "reactjs" },
                { id: 2, name: "VueJs", img: "vuejs" },
                { id: 3, name: "Ionic 4", img: "ionic" },
                { id: 4, name: "Angular", img: "angular" },
                { id: 5, name: "Material UI", img: "materialui" },
                { id: 6, name: "Vuetify", img: "vuetify" },
                { id: 7, name: "Quasar Framework", img: "quasar" },
                { id: 8, name: ".Net Core", img: "netcore" },
            ]
        },
        {
            id: 1, name: "Bases de Datos",
            items: [
                { id: 1, name: "MySQL", img: "mysql" },
                { id: 2, name: "Firebird", img: "firebird" },
                { id: 3, name: "SQLServer", img: "sqlserver" },
                { id: 4, name: "MongoDB", img: "mongodb" },
            ]
        },
        {
            id: 1, name: "Conocimientos Extras",
            items: [
                { id: 1, name: "Soporte Técnico", img: "soporte" },
                { id: 2, name: "Diseño Gráfico", img: "photoshop" },
                { id: 3, name: "Git", img: "git" },
            ]
        },
    ];

    return (
        <>
            <CsScrollArea className="bg-white-900" rest={50}>
                <div>
                    {knowledge.map((e) => (
                        <div key={e.id} className="p-2 border rounded-md m-5 text-lg font-bold text-center">
                            {e.name}
                            <div className="flex justify-center">
                                {e.items.map((k) => (
                                    <div>
                                        <div className="m-4 flex w-[80%] h-[60%]">
                                            <img key={k.id} src={exportImage(k.img)} width={"120px"} />
                                        </div>
                                        {k.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                    }
                </div>
            </CsScrollArea>
        </>
    )
}
export default KnowledgeAndSkills