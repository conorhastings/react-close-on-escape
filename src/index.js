import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CloseOnEscape extends Component {
  constructor() {
    super();
    this.onEscape = this.onEscape.bind(this);
  }

  onEscape({ keyCode }) {
    if (keyCode === 27) {
      this.props.onEscape();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape);
  }

  render() {
    return this.props.children;
  }
}

CloseOnEscape.propTypes = {
  onEscape: PropTypes.func.isRequired
};
