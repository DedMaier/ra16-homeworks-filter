export const ProjectList = ({projects}) => {

  let projectsElems = projects.map((item) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img src={item.img} className="projects__img"/>
  });

  return (
    <div className="projects">
        <figure>
            {projectsElems}
        </figure>
    </div>
  )
}
