import React from 'react';
import Field from './Field';
import Button from './Button';


class UserCreate extends React.Component {
    render() {
        return (
            <div className="ui form">
                <Field default="Sakr" />
                <Button />
            </div>
        )
    }
}
export default UserCreate;