import { forwardRef, useEffect, useRef } from 'react';
import styles from '/resources/js/Components/Chat/App.module.scss'

export default forwardRef(function TextInput({ type = 'text', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
            <input
                {...props}
                type={type}
                className={
                    'w-11/12' + ' ' + styles.input_send
                }
                ref={input}
            />
    );
});
