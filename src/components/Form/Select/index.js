import styles from './Select.css'

function Select({ text, name, handleOnChange, value, options }) {
    return (
        <div className='form_control'>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''} >
                <option>Selecione uma opção</option>
                {options.map((item) => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}
export default Select; 