import CsScrollArea from "@/components/CsScrollArea/CsScrollArea";

const Projects = () => {

    const projects = [
        { id: 1, name: "project 1", empresa: "" },
        { id: 2, name: "project 2", empresa: "" },
        { id: 3, name: "project 3", empresa: "" },
        { id: 4, name: "project 4", empresa: "" },
        { id: 5, name: "project 5", empresa: "" },
        { id: 6, name: "project 6", empresa: "" },
    ];

    return (
        <>
            <CsScrollArea className="bg-white-900" rest={50}>
                <div className="grid grid-cols-3">
                    {projects.map((e) => (
                        <div key={e.id} className="border rounded-md m-2">
                            asd
                        </div>
                    ))
                    }
                </div>
            </CsScrollArea>
        </>
    )
}
export default Projects