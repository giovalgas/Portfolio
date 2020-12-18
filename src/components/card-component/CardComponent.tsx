import React from 'react';
import './layout/card.css';

interface Props{
    title?: string;
    id: string
    bgPhoto?: string;
}

export const CardComponent: React.FC<Props> = (Props) => {

    return(
        <div className={"card-" + Props.id + " card"}>

            {Props.children}
        </div>
    );
    
}