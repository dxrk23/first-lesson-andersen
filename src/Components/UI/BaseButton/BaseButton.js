import React, {Component} from 'react';
import styles from './BaseButton.module.css';

class BaseButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <button type="submit" className={styles.baseButton} >
                { this.props.text }
            </button>
        );
    }
}

export default BaseButton;