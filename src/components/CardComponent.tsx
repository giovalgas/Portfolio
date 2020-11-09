import React from 'react';
import './layout/CardComponent.css';

interface Props{
    title?: string;
    width: number;
    height: number;
    id: string
}

export const CardComponent: React.FC<Props> = (Props) => {
    return(
        <div className={"card-" + Props.id + " card"} style={{width: Props.width/10 + "rem", height: Props.height}}>
            {Props.children}
        </div>
    );
}