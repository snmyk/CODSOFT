import React from "react";
import { useState } from "react";

//Display the pictures of my projects
export const ProjectDisplayCard = (props) =>
{
    const {project} = props;
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div className="project-card flex-wrap relative" onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <img id={project.id} className="w-full" src={project.imageUrl} alt={project.name} style={{opacity: isHovered ? 0:1, transition:'opacity 0.5s ease'}}/>
            {isHovered && <ProjectHiddenCard project = {project}/>} 
        </div>
    ) 
}
//Display info about the project
export const ProjectHiddenCard = (props) =>
{
    const {project} = props;
    return(
        <div id={project.id+'-hidden'} className="project-card hidden-card absolute top-1/4 bottom-1/4  mr-2 ml-2 flex-wrap flex justify-center items-center  mb-8">
            <p className="font-roboto text-center p-2.5 text-2xl text-gold w-full">{project.name}</p>            
            <div className="p-2.5 w-full text-center">
                <p className="text-white inline text-xl">Tech Used: </p> 
                {project.techStack.map((tech, index)=>{
                          return <span key={index} className=" mr-2 text-xl text-twitterblue">{tech}, </span>
                        }     
                    )
                }               
            </div>
            <div className="flex justify-center items-center">
                <a className='text-xl text-white border-dashed h-8 m-2 w-32' target="blank" href={project.code}>Code</a>
                {project.demo!=='N/A' ? (
                    <a className='text-xl text-white border-dashed h-8 m-2 w-32' target="blank" href={project.demo}>Demo</a>
                ):null}
            </div>
        </div>
    )
}