import React, {Component} from 'react';
import styles from './FormInput.module.css';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={styles.formInputContainer}>
                <label htmlFor="--form-input">{ this.props.label }</label>
                { this.props.type === 'textarea' ?
                    <textarea rows="7" id="--form-input" className={[styles.formInput]} placeholder={ this.props.placeholder }/> :
                    <input id="--form-input"  className={styles.formInput} type={ this.props.type } placeholder={ this.props.placeholder }/>
                }
            </div>
        );
    }
}

export default FormInput;