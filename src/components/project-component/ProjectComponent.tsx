import React from 'react';
import './layout/project-card.css';
import questionMark from '../../images/question-mark.png';

interface Props{
    name: string
    id: number;
    bgPhoto: string | null;
}

export const ProjectComponent: React.FC<Props> = (Props) => {

    let backgroundPhoto: string;

    Props.bgPhoto == null ? backgroundPhoto = backgroundPhoto = "url(" + questionMark + ")" : backgroundPhoto = "url(" + Props.bgPhoto + ")"

    return(
        <div className={"project-" + Props.name + " project id-" + Props.id} style={{backgroundImage: backgroundPhoto, backgroundSize: Props.bgPhoto == null ? "80%" : "100%"}}>
            {Props.children}
        </div>
    );
}