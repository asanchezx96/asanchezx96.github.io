import * as fabric from 'fabric'; // v6
import { buttonDelete } from './ButtonDelete';

export const addTriangleText = (canvas: fabric.Canvas | null, texto: string) => {
    const largo = texto.length;
    const text = new fabric.IText(texto, {
        fontSize: 40,
        top: 40,
        left: 48 - largo * 10,
        fill: "#FFF",
    });

    const attribute = 'my_attribute';
    const value = 'first_name';

    (text as any)[attribute] = value; //eslint-disable-line

    const triangle = new fabric.Triangle({
        fill: '#f55',
        top: 0,
        left: 0,
    });

    const group = new fabric.Group([triangle, text], {
        top: 0,
        left: 0,
    });
    buttonDelete(group)

    canvas && canvas.add(group);
};

export const addIcon = (canvas: fabric.Canvas, element: string) => {
    fabric.FabricImage.fromURL(element)
        .then((img) => {
            buttonDelete(img)
            img.set({
                left: 210,
                top: 120,
                cornerSize: 10,
                borderColor: '#000', // color del borde
                cornerColor: 'red', // color de las esquinas
            }).scale(0.3);
            canvas.add(img);
            canvas.setActiveObject(img);
        })
};


// Tipado para los elementos que se pasarán a las funciones
// interface ElementType {
//     text: string;
//     image?: string;
// }


// export const addCircleText = (canvas: fabric.Canvas, element: string) => {
//     fabric.FabricImage.fromURL(element).then((img) => {
//         const texto = new fabric.IText('Texto editable', {
//             left: 10,
//             top: 10,
//             fontFamily: 'arial',
//             fill: '#333',
//             lineHeight: 1.1,
//         });

//         const grupo = new fabric.Group([texto, img], {

//             left: 150,
//             top: 100,
//         });

//         canvas.add(grupo);
//     })
// };

// export const addHexagonText = (canvas: fabric.Canvas | null, element: ElementType) => {
//     const largo = element.text.length;
//     const text = new fabric.IText(element.text, {
//         fontSize: 50,
//         top: 12,
//         left: 40 - largo * 8,
//         fill: "#fff",
//     });

//     const attribute = 'my_attribute';
//     const value = 'first_name';

//     (text as any)[attribute] = value;

//     const hex = new fabric.Polygon([
//         { x: 50, y: 0 },
//         { x: 25, y: 43.30 },
//         { x: -25, y: 43.301 },
//         { x: -50, y: 0 },
//         { x: -25, y: -43.301 },
//         { x: 25, y: -43.301 }
//     ], {
//         fill: '#f55',
//         top: 0,
//         left: 0,
//     });

//     const group = new fabric.Group([hex, text], {
//         top: 0,
//         left: 0,
//     });

//     canvas && canvas.add(group);
// };

// export const addTextBox = (canvas: fabric.Canvas, text: string) => {
//     const itemtext = new fabric.Textbox(text, {
//         fontSize: 15,
//         top: 10,
//         left: 10,
//         fill: "#000",
//         cornerSize: 15,
//         borderColor: '#000', // color del borde
//         cornerColor: 'red', // color de las esquinas
//     });

//     canvas.add(itemtext);
//     canvas.setActiveObject(itemtext);

//     itemtext.on('changed', function () {
//         if (itemtext.text?.trim() === '') {
//             canvas.remove(itemtext);
//             canvas.requestRenderAll();
//         }
//     });
// };

// export const addImage = (canvas: fabric.Canvas, element: string, texto: string) => {
//     fabric.Image.fromURL(`data:image/jpeg;base64,${element}`, (img) => {
//         img.set({ left: 0, top: 0 }).scale(0.2);
//         canvas.add(img);
//         canvas.setActiveObject(img);
//     });
// };
