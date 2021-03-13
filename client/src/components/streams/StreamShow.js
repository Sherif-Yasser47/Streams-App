import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flvjs from 'flv.js';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef()
    }
    componentDidMount() {
        let { id } = this.props.match.params
        this.props.fetchStream(id)
        this.buildPlayer()
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.flvPlayer.destroy()
    }

    buildPlayer () {
        let { id } = this.props.match.params
        if (this.flvPlayer || !this.props.stream) {
            return;
        }
        this.flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.flvPlayer.attachMediaElement(this.videoRef.current);
        this.flvPlayer.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Lodaing...</div>
        }
        const { title, description } = this.props.stream
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls poster="https://img-b.udemycdn.com/course/750x422/2466946_253e_2.jpg?secure=6wRN9Dw-O2FFaUpqM7VNYA%3D%3D%2C1601707180"></video>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);