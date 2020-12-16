import React  from 'react';
import './layout/project-card.css';
import questionMark from '../../images/question-mark.png';


interface Props{
    name: string
    id: number;
    bgPhoto: string | null;
    link: string;
    bgSize: string;
}

export const ProjectComponent: React.FC<Props> = (Props) => {

    let backgroundPhoto: string

    Props.bgPhoto == null ? backgroundPhoto = backgroundPhoto = "url(" + questionMark + ")" : backgroundPhoto = "url(" + Props.bgPhoto + ")"

    return(
        <a href={Props.link} rel="noreferrer" target="_blank" className="project-holder">
            <div className={" project pid-" + Props.id + " " }        
            style={{
                backgroundImage: backgroundPhoto, 
                backgroundSize: Props.bgSize,
            }}
            >
            </div>
            <h2 className="project-name">{Props.name}</h2>
            <p className="project-description">{Props.children}</p>
        </a>
        
    );
}