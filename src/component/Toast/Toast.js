import React, { useState, useEffect } from "react"

import "./style.css"

const Toast = (props) => {
  const { toastList, position, autoDelete, dismissTime } = props
  const [list, setList] = useState(toastList)

  useEffect(() => {
    setList([...toastList])

    // eslint-disable-next-line
  }, [toastList])

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        deleteToast(toastList[0].id)
      }
    }, 3000)
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line
  }, [list])

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id)
    const toastListItem = toastList.findIndex((e) => e.id === id)
    list.splice(listItemIndex, 1)
    toastList.splice(toastListItem, 1)
    setList([...list])
  }

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div className="notification-image">
              <img style={{ height: "1.6em" }} src={toast.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Toast
