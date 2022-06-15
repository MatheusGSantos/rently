import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiSendPlaneFill } from 'react-icons/ri';
import { Container } from './styles';

interface IChat {
  sender: string;
  message: string;
}

interface IChatHistory {
  [key: string]: IChat[];
}

const chatHistoryMock: IChatHistory = {
  Pedro: [
    {
      sender: 'Pedro',
      message: 'Sou pedro',
    },
    {
      sender: 'Matheus',
      message: 'Hello',
    },
    {
      sender: 'Pedro',
      message: 'Sou pedro',
    },
    {
      sender: 'Matheus',
      message: 'Hello',
    },
    {
      sender: 'Pedro',
      message: 'Sou pedro',
    },
    {
      sender: 'Matheus',
      message: 'Hello',
    },
    {
      sender: 'Pedro',
      message: 'Sou pedro',
    },
    {
      sender: 'Matheus',
      message: 'Hello',
    },
    {
      sender: 'Pedro',
      message: 'Sou pedro',
    },
    {
      sender: 'Matheus',
      message: 'Hello',
    },
  ],
  Gledson: [
    {
      sender: 'Gledson',
      message: 'Sou Gledson',
    },
    {
      sender: 'Matheus',
      message: 'Hello',
    },
  ],
};

const Chat: React.FC = () => {
  const { seller } = useParams();
  const [loading, setLoading] = useState(true);
  const [chatHistory, setChatHistory] = useState<IChatHistory>(chatHistoryMock);
  const [message, setMessage] = useState('');
  const [currentChat, setCurrentChat] = useState(seller);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [chatHistory[currentChat ?? '']]);

  const handleSubmitMessage = (): void => {
    if (message.length > 0 && currentChat) {
      setChatHistory((prevChatHistory) => {
        const newChatHistory = { ...prevChatHistory };
        newChatHistory[currentChat] = [
          ...(newChatHistory[currentChat] ?? []),
          {
            sender: 'Matheus',
            message,
          },
        ];
        setMessage('');
        return newChatHistory;
      });
    }
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmitMessage();
    }
  };

  return (
    <Container>
      {loading ? (
        <div id="wrapper">
          <aside>
            {Object.keys(chatHistory).map((key) => (
              <div
                key={key}
                onClick={() => setCurrentChat(key)}
                className={currentChat === key ? 'active' : ''}
              >
                {key}
              </div>
            ))}
          </aside>
          <section id="chat">
            {currentChat && (
              <>
                <div id="messages">
                  {chatHistory[currentChat].map((chat, index) => (
                    <div
                      ref={lastMessageRef}
                      className={
                        chat.sender === currentChat
                          ? 'seller-message'
                          : 'user-message'
                      }
                      key={`${chat.sender}-me-${index}`}
                    >
                      <p>{chat.message}</p>
                    </div>
                  ))}
                </div>
                <div id="input-field">
                  <input
                    type="text"
                    placeholder=" Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyUp={handlePressEnter}
                  />
                  <RiSendPlaneFill
                    size={24}
                    color="#4b3387"
                    onClick={handleSubmitMessage}
                  />
                </div>
              </>
            )}
          </section>
        </div>
      ) : (
        <div id="wrapper">
          <section>
            <img src="" alt="" />
            <div>
              <h1>Title</h1>
              <p>Seller</p>
              <h3>Price</h3>
            </div>
          </section>
          <section>
            <h1>Description</h1>
            <p>
              assdcas rnsdncascs aejansfjas dasjiasoa sdasas. aos asdjnoxc asd
              cxaons
            </p>
          </section>
        </div>
      )}
    </Container>
  );
};

export default Chat;
