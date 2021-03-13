import React from 'react';
import LanguageContext from './LanguageContext';

class Field extends React.Component {
    //Getting data iu of the context object using the context.Consumer component.
    inputLabel = (value) => {
      return  value === 'english' ? 'Name' : 'Nombre'
    }
    render() {
        return (
            <div className="ui field" style={{marginTop:"5px"}}>
                <label>
                    <LanguageContext.Consumer>
                        {this.inputLabel}
                    </LanguageContext.Consumer>
                </label>
                <input type="text" style={{width:"50%"}} defaultValue={this.props.default} />
            </div>
        )
    }
}

export default Field;