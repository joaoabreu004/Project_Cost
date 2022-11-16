
import ProjectForm from '../../project/ProjectForm'
import styles from './NewProject.css'
// REPONSÁVEL POR FAZER REDIRECT
import { useNavigate } from 'react-router-dom'



function NewProject() {

    const history = useNavigate()


    function createPost(project) {
        //INICIALIZE COST AND SERVICES
        // Má prártica de segurança
        project.cost = 0
        project.services = []
        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                history('/projects', {state: {message: 'Projeto Criado com sucesso'}})
                //REDIRECT
            })
            .catch((erro) => console.console(erro))
    }


    return (
        <div className='newproject_container'>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar o Projeto" />
        </div>

    )
}

export default NewProject