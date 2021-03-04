import React from 'react';
import Drag from './Drag';
import {SortableContainer} from "react-sortable-hoc";

const DragItems = SortableContainer(({colors, deleteColor }) => {
    return (
        <div>
           {colors.map((color, i) => (
              <Drag index={i}
               key={color.name} 
              color={color.color} name={color.name}
               handleClick={() => deleteColor(color.name)}
               />
            ))} 
        </div>
    );
});

export default DragItems;