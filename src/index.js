import React, { Component, PropTypes } from 'react';

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
    return <span onEscape={this.props.onEscape}>{this.props.children}</span>;
  }
}

CloseOnEscape.propTypes = {
  onEscape: PropTypes.func.isRequired
};