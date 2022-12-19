import React, { memo } from 'react'

const Message = ({numberOfMsg}) => {
    console.log("message render...")
  return (
    <div>
        <h3>Send {numberOfMsg} Message</h3>
    </div>
  )
}

export default memo(Message)