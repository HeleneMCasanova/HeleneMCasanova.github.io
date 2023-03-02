import React, { Component } from "react";
import Select from "react-select";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.options[0]
    };
  }

  sendData = (event) => {
    this.props.parentCallback(event);
  }

  onChange = selectedOption => {
    this.setState({ text: selectedOption });
  }  
  

  render() {
    return (
      <Select
        options={this.props.options}
        onChange={e => {this.onChange(e); this.sendData(e)}}
        value={this.state.text}
      />
    );
  }
}

export default Dropdown;
