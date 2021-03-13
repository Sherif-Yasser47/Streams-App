import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from './LanguageContext';

class LangApp extends React.Component {
    state = { language: 'english' }
    onLanguageChange = (language) => {
        this.setState({ language })
    }
    render() {
        return (
            <div className="ui form">
                Select Language:
                <i className="uk flag" style={{ marginLeft: '5px' }} onClick={() => this.onLanguageChange('english')}></i>
                <i className="es flag" onClick={() => this.onLanguageChange('spanish')}></i>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default LangApp;