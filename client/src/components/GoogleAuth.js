import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '1028754927631-gqit7bo0c5nvc6olcq4df6and0elh1hr.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.googleAuth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.googleAuth.isSignedIn.get())
                this.googleAuth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.googleAuth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }

    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn === true) {
            return (<div>
                <button onClick={this.googleAuth.signOut} className="ui red google button">
                    <i className="google icon"></i>
                SignOut
                </button>
            </div>
            )
        } else {
            return (<div>
                <button onClick={this.googleAuth.signIn} className="ui red google button">
                    <i className="google icon"></i>
            Signin with Google
                </button>
            </div>
            )
        }
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {
    signIn,
    signOut
})(GoogleAuth);