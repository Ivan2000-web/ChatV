import { useForm } from "@inertiajs/react";
import TextInputNew from "../TextInputNew";
import styles from '/resources/js/Components/Chat/App.module.scss'

export default function ChatInput({ receiver }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("chat.store", receiver?.id));
        reset("message");
    };

    return (
        <div className="bg-white mt-5">
            <form onSubmit={submit} className={styles.form_send}>
                <TextInputNew
                    placeHolder="Write a message"
                    name="message"
                    value={data.message}
                    onChange={onHandleChange}
                ></TextInputNew>
                <button type="submit" className="ml-20">
                <i className="fa-solid fa-arrow-right text-gray-500" aria-hidden="true"></i>
            </button>
            </form>
        </div>
    );
}