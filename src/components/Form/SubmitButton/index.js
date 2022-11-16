import styles from './SubmitButton.css'
function SubmitButton({text}){
    return (
        <div>
            <button className='btn_enviar'>{text}</button>
        </div>
    )
}
export default SubmitButton