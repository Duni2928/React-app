import React from 'react'
import { useState, useEffect } from 'react'
import c from './ProfileInfo.module.css'
const ProfileStatusWithHook = (props) => {
  //console.log(props.updateStatus())
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  //console.log("ooo" + props.status)
  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return <div className={c.status}>
    {editMode && <input onBlur={deactivateEditMode} onChange={onStatusChange} className="textarea" value={status}></input>}
    {!editMode && <span id="span" onClick={activateEditMode} className="status">{status || "----"}</span>}
  </div>
}

export default ProfileStatusWithHook