import React from 'react';
import LanguageContext from './LanguageContext';

class Button extends React.Component {
    //declaring the context type to link the context object with the component.
    //accessing the context object with the value inside it through this.context .
    static contextType = LanguageContext;
    render() {
        let text = this.context === 'english' ? 'Submit' : 'Enviar';
        return (
            <button className="ui primary button">{text}</button> //enviar
        )

    }
}

export default Button;