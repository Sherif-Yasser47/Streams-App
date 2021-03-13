import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderFieldError({ touched, error }) {
        if (touched && error) {
            return (
                <div className="ui negative message" style={{ width: '50%' }}>
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        let className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className} >
                <label>{label}</label>
                <input {...input} style={{ width: '50%' }} autoComplete="off" />
                <div>{this.renderFieldError(meta)}</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title" />
                    <Field name="description" component={this.renderInput} label="Enter Description" />
                    <button className="ui primary button" type="submit">Submit</button>
                </form>
                <br></br>
            </div>
        )
    }
};

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'Title is required'
    }
    if (!formValues.description) {
        errors.description = 'Description is required'
    }
    return errors
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);