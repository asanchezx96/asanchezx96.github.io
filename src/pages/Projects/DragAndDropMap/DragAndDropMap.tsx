import { useState, useEffect } from "react";
import * as fabric from 'fabric'; // v6
import { addIcon, addTriangleText } from "./addObjects";
// import { Button } from "@/components/ui/button";
import exportImage from "@/lib/exportImage";
import { Button } from "@/components/ui/button";

const DragAndDropMapV2 = () => {


    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

    useEffect(() => {
        if (!canvas) { // Solo inicializar si no hay un canvas previo
            const newCanvas = new fabric.Canvas("canvas", {
                height: 800,
                width: 1300,
                backgroundColor: '#fff'
            })
            setCanvas(newCanvas);
        }
        // Limpiar el canvas cuando se desmonte el componente
        return () => {
            if (canvas) {
                canvas.dispose();
            }
        };
    }, [canvas])

    const agregarTriangulo = () => {
        if (!canvas) return;
        addTriangleText(canvas, "prueba");
    }

    const agregarIcono = (img: string) => {
        if (!canvas) return;
        addIcon(canvas, exportImage(img));
    }

    // const obtenerImagen = () => {
    //     if (!canvas) return; // Asegúrate de que el canvas no sea nulo

    //     // Cargar la imagen desde la URL
    //     fabric.Image.fromURL(exportImage("plano1")).then((img) => {
    //         // Establece la imagen de fondo en el canvas
    //         canvas.backgroundImage = img;
    //         canvas.renderAll();

    //         // Ajusta las dimensiones del canvas
    //         canvas.setDimensions({
    //             width: 1200,
    //             height: 800
    //         });
    //     })
    // };

    const btnicons = [
        { name: "csharp", img: "csharp" },
        { name: "angular", img: "angular" },
        { name: "ionic", img: "ionic" },
        { name: "mysql", img: "mysql" },
        { name: "php", img: "php" },
        { name: "sqlserver", img: "sqlserver" },
        { name: "javascript", img: "javascript" },
        { name: "reactjs", img: "reactjs" },
        { name: "photoshop", img: "photoshop" },
        { name: "vuejs", img: "vuejs" },
        { name: "visualbasic", img: "visualbasic" },
        { name: "materialui", img: "materialui" },
        { name: "vuetify", img: "vuetify" },
        { name: "quasar", img: "quasar" },
        { name: "netcore", img: "netcore" },
        { name: "firebird", img: "firebird" },
        { name: "mongodb", img: "mongodb" },
        { name: "quasar", img: "quasar" },
        { name: "soporte", img: "soporte" },
        { name: "git", img: "git" },
    ];

    return (
        <div className="col-12">
            <div className="p-2">
                <div className="grid grid-cols-6">
                    <div className="grid grid-cols-3">
                        {btnicons.map((icon, i) => (
                            <div key={i} className="flex">
                                <img src={exportImage(icon.name)} key={i} className="m-2 w-10 h-10 border hover:border-red-500" onClick={() => agregarIcono(icon.img)} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <Button onClick={agregarTriangulo}>Agregar Triangulo</Button>
                        {/* <Button onClick={agregarIcono}>Agregar Icono</Button> */}
                        {/* <Button onClick={() => obtenerImagen()} >Agregar Imagen</Button> */}
                    </div>
                    <div className="col-span-5 w-full">
                        <canvas className="border p-4" id='canvas' />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DragAndDropMapV2;
