import styles from './Message.css';
import { useState, useEffect } from 'react';

function Message({ type, msg }) {

    const [visible, setVisble] = useState(false)


    useEffect(() => {
        if (!msg) {
            setVisble(false)
            return
        }
        setVisble(true)

        const timer = setTimeout(() => {
            setVisble(false)

        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])



    return (
        <>
            {visible && (
                <div className={"message " + type}>{msg}</div>
            )}
        </>
    )

}
export default Message