import { useState } from 'react'
import "./Projects.css"
import { useNavigate } from 'react-router-dom'

function Projects() {
  const navigate = useNavigate()
  const [project] = useState([
    {
      id: 1,
      name: "Todo Application",
      image: "https://media.istockphoto.com/id/1182693484/vector/clipboard-with-checklist-icon-flat-clipboard-with-checklist-icon-notepad-with-a-pencil.jpg?s=612x612&w=0&k=20&c=LCpGnmXHrKq1l9D6dO1MYVhinxKOQOLYfx8xwxCAJ34=",
      route: "/todo"
    },
    {
      id: 2,
      name: "Calculator",
      image: "https://framerusercontent.com/images/HAwLKZDqD2QSwlxuTL0OE8y8T0.webp?lossless=1",
      route: "/calculator"
    },
    {
      id: 3,
      name: "Counter",
      image: "https://play-lh.googleusercontent.com/eihOnAELz57V4Doin9f1-v7JvU9rYltkFKXTpxRzYjSlV2wiRWoyq9g1JdPCum6x3w",
      route: "/counter"
    }
  ])

  const handleNavigate = (route) => {
    navigate(route)
  }

  return (
    <>
      <h1 className="main-heading">Projects</h1>
      <div className="project-cards">
        {project.map(item => (
          <div className="project-card" onClick={() => handleNavigate(item.route)} key={item.id} style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "center",
            height: "500px",
            width: "500px",
            backgroundSize: "cover",
            cursor: "pointer"
          }
          }>
            <h1 className="project-name">{item.name}</h1>
            <button className="home-buttons" onClick={() => handleNavigate(item.route)}>Open Project</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects