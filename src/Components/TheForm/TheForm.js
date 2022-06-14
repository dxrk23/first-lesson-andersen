import React, {Component} from 'react';
import FormInput from "../UI/FormInput/FormInput";
import styles from './TheForm.module.css';
import BaseButton from "../UI/BaseButton/BaseButton";

class TheForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={styles.formMain}>
                <div className={styles.header}>
                    Создание анкеты
                </div>
                <div className={styles.content}>
                    <FormInput placeholder="Имя" label="Введите имя"/>
                    <FormInput placeholder="Фамилия" label="Введите фамилию"/>
                    <FormInput placeholder="Дата рождения" label="Введите дату рождения" type="date"/>
                    <FormInput placeholder="Телефона" label="Введите номер телефона" type="text"/>
                    <FormInput placeholder="О Себе" label="Расскажите о себе" type="textarea"/>
                    <FormInput placeholder="Стек технологии" label="Опишите свой стек технологии" type="textarea"/>
                    <FormInput placeholder="Описаиние" label="Опишите свой последний проект" type="textarea"/>
                    <div className={styles.buttonsContainer}>
                        <BaseButton text="Сохранить"/>
                        <BaseButton text="Отмена"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TheForm;