import React, {useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import { getcurrentChannelMessages } from '../../slices/selectors'

const MessagesBox = () => {
  const channellsMesages = useSelector(state => getcurrentChannelMessages(state))
  
  const messagesBoxRef = useRef(null);
  useEffect(() => {
    messagesBoxRef.current.scrollTop = messagesBoxRef.current.scrollHeight;
  });

  return (
    <div 
      id="message-box"
      className="chat-messages overflow-auto px-5"
      ref={messagesBoxRef}
    >
      {channellsMesages && (
        channellsMesages.map(({ id, body, username}) => {

          return (
            <div className="text-break mb-2" key={id}>
              <b>{username}</b>: {body}
            </div>
          )
        })
      )}
    </div>
  )
}

export default MessagesBox;