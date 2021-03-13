import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui primary button">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="negative ui button">Delete</Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id} style={{ marginBottom: '5px' }}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <div className="header">
                            <Link to={`/streams/${stream.id}`}>
                                {stream.title}
                            </Link>
                        </div>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })

    }

    renderCreate() {
        if (this.props.isSignedIn === true) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui primary button">Create Stream</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui big celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {
    fetchStreams
})(StreamList);