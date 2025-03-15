import exportImage from '@/lib/exportImage';
import * as fabric from 'fabric'; // v6

const deleteImg = document.createElement('img');
deleteImg.src = exportImage("deleteIcon");

// Configurar propiedades de los controles de los objetos
fabric.FabricObject.prototype.transparentCorners = false;
fabric.FabricObject.prototype.cornerColor = 'blue';
fabric.FabricObject.prototype.cornerStyle = 'circle';

// Función para agregar el control de eliminación a un objeto
export const buttonDelete = (element: fabric.FabricObject) => {
    element.controls.deleteControl = new fabric.Control({
        sizeX: 30,
        sizeY: 30,
        x: 0.5,
        y: -0.5,
        offsetY: 30,
        cursorStyle: 'pointer',
        mouseUpHandler: (event: fabric.TPointerEvent, transform: fabric.Transform) => deleteObject(event, transform),
        render: renderIcon,
    });
}

// Función para manejar la eliminación de un objeto
function deleteObject(_eventData: fabric.TPointerEvent, transform: fabric.Transform) {
    const canvas = transform.target.canvas;
    if (!canvas) return;
    canvas.remove(transform.target);
    canvas.requestRenderAll();
}

// Función para renderizar el ícono de eliminación
function renderIcon(ctx: CanvasRenderingContext2D, left: number, top: number, fabricObject: fabric.Object) {
    const size = 20;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(deleteImg, -size / 2, -size / 2, size, size);
    ctx.restore();
}
