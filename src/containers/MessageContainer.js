import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message'

class MessageContainer extends Component {
    render() {

        return (

            <Message message={this.props.message} />
        );
    }
}

const mapStatetoProps = state => {
    return ({
        message: state.message
    });
}

MessageContainer.propTypes = {
    message: PropTypes.string
}

const mapDispatchToProps = (dispatch, props) => {
    return ({

    });
}

export default connect(mapStatetoProps, mapDispatchToProps)(MessageContainer);

