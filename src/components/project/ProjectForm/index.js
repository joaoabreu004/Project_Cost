import Input from '../../Form/Input';
import Select from '../../Form/Select';
import SubmitButton from '../../Form/SubmitButton';
import styles from './ProjectForm.css'
import { useState, useEffect } from 'react'

function ProjectForm({ btnText, handleSubmit, projectData }) {


    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            // HEADERS
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((erro) => console.log(erro))

    }, [])

    const submit = (e) => {
        e.preventDefault()
        // console.log(project)
        //REALIZANDO O MÉTODO CREATE QUE FOI PASSADO COMO PROP
        handleSubmit(project)
    }

    //MUDANDO O STATE DE PROJECT
    function handleChange(e) {
        //DESTRUCTING
        setProject({ ...project, [e.target.name]: e.target.value })
    }


    // CATEGORIA
    function handleCategory(e) {
        setProject({
            ...project, 
            category: {
                id: e.target.value,
                nome: e.target.options[e.target.selectedIndex].text, 
            }
        })
    }

    return (
        <form className='form' onSubmit={submit}>
            <Input type='text' text='Nome do Projeto' name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ""}/>
            <Input type='number' text='Orçamento do Projeto' name="budget " placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.name ? project.budget : ""} />
            <Select name="category_id" text="Selecione a Categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id: ''}/>
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;