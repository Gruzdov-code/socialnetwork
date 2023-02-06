import React, { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode() {
    //state ассинхронен: colsole.log(this.state.edit) как и до изменения так и после изменения будет одинаковой
    //плохой вариант записи :
    //  this.state.editMode=true
    // this.forceUpdate()
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: true,
    });
    this.props.updateStatus(this.state.status || "no status")
  }
  handleFocusText(e) {
    e.target.select();
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTagret.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode.bind(this)}>
            {this.props.status}
          </span>
        ) : (
          <input
            onChange={this.onStatusChange}
            onFocus={this.handleFocusText}
            autoFocus={this.state.editMode}
            onBlur={this.deactivateEditMode.bind(this)}
            value={this.state.status}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
