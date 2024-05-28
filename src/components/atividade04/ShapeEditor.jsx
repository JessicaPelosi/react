import { useState } from "react";
import { Card } from "react-bootstrap";


let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 }
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                return shape;
            } else {
                return { 
                    ...shape, 
                    y: shape.y + 50 
                };
            }
        });
        setShapes(nextShapes);
    }

    return (
        <div style={{paddingBottom: "300px"}}>
            <h3>Exercício 10 - ShapeEditor</h3>
            <button onClick={handleClick}>
                Move Circles Down!
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'relative',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20
                    }} 
                />
            ))}
        </div>
    );
}