import React from 'react'
import c from './ProfileInfo.module.css'
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState( {
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState( {
      editMode: false
    });
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }
  render() {
    return <div className={c.status}>
      {this.state.editMode && <input onBlur={this.deactivateEditMode} onChange={this.onStatusChange} className={c.textarea} value={this.state.status}></input>}
      {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.state.status || "----"}</span>}
    </div>
  }
}

export default ProfileStatus