import React from 'react';
import Modal from '../../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        let { id } = this.props.match.params
        let actions = (
            <div>
                <button onClick={() => this.props.deleteStream(id)} className="negative ui button">Delete</button>
                <Link to="/" className="ui primary button">Cancel</Link>
            </div>
        )
        if (!this.props.stream) {
            return <div></div>
        }
        return (
                <Modal
                    title='Delete Stream'
                    content={`Are you sure you want to delete stream ''${this.props.stream.title}''`}
                    actions={actions}
                    onDismiss={() => history.push('/')}
                />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let streamId = ownProps.match.params.id
    return { stream: state.streams[streamId] }
}

export default connect(mapStateToProps, {
    fetchStream,
    deleteStream
})(StreamDelete);