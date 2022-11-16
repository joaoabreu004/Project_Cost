import styles from './Home.css'
import saving from '../../../img/savings.svg'
import LinkButton from '../../layout/LinkButton'


function Home(){
    return(
        <section className='home_container'>
            <h1>Bem Vindo ao <span>Costs</span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/projects' text='Criar Projeto'></LinkButton>
            <img src={saving} alt='Costs' />
        </section>
    )
}

export default Home