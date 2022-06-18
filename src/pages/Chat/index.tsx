import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { RiSendPlaneFill } from 'react-icons/ri';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';
import { ApiService } from '../../services/ApiService';
import { IChatListDTO } from '../../services/dtos';

export interface IChat {
  sender: string;
  message: string;
}

interface IChatHistory {
  [key: string]: IChat[];
}

const chatHistoryMock: IChatHistory = {
  Pedro: [
    {
      sender: 'Matheus',
      message: 'Bom dia, quanto que tá o ps5?',
    },
    {
      sender: 'Pedro',
      message: 'Bom dia, 6500',
    },
    {
      sender: 'Matheus',
      message: 'Faz desconto?',
    },
    {
      sender: 'Pedro',
      message: 'Faço sim, 6400',
    },
    {
      sender: 'Matheus',
      message: 'Boa, vou comprar',
    },
    {
      sender: 'Pedro',
      message: 'Fechado!',
    }
  ]
};

const Chat: React.FC = () => {
  const { seller='tmp' } = useParams();
  const {user} = useAuth();
  const api = new ApiService();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(true);
  const [chatList, setChatList] = useState<IChatListDTO>([] as IChatListDTO);
  const [chatHistory, setChatHistory] = useState<IChatHistory>({} as IChatHistory);
  const [message, setMessage] = useState('');
  const [currentChat, setCurrentChat] = useState('');

  const fetchChatHistory = async (): Promise<void> => {
    try {
      const userChatList = await api.getChatList();

      setChatList(userChatList);

      const promiseList = userChatList.map(async (chat) => {
        const messages = await api.getMessages(chat.id);

        return {chat, messages};
      })

      Promise.all(promiseList).then((values) => {
        const aux = {} as IChatHistory;
        values.forEach(value => {
          aux[value.chat.id] = value.messages;
        })

        const targetChat = userChatList.find(chat => chat.name === seller);

        if(targetChat) {
          setCurrentChat(targetChat.id);
        }
        
        setChatHistory(aux);
        setLoading(false);
      }).catch(err => {
        console.log(err);
      });

    } catch (error) {
      console.info(error);
    }
  }

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [chatHistory[currentChat ?? '']]);

  useEffect(() => {
    fetchChatHistory();
  }, []);

  

  useEffect((): any => {
      let delay = 800;
      let timeout: any = null;
      
      const updateMessages = async (): Promise<void> => {
        try {
          console.log(currentChat)
          const messages = await api.getMessages(currentChat, 800);
          setChatHistory({
            ...chatHistory,
            [currentChat]: messages,
          });
          
          delay = 800;
          timeout = setTimeout(updateMessages, delay);
  
        } catch (error) {
          console.info(error);
          delay *= 2;
          timeout = setTimeout(updateMessages, delay);
        }
      }
      !loading && updateMessages();
      return () => {
        timeout && clearTimeout(timeout);
      }

  }, [loading]);

  const handleSubmitMessage = async (): Promise<void> => {
    if (message.length > 0 && currentChat) {
      console.info(currentChat)
      try {
        const sellerId = chatList.find(chat => chat.id === currentChat)?.seller;
        await api.sendMessage(message, sellerId ?? '');
        setMessage('');
      } catch(error) {
        console.info(error);
      }
    }
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmitMessage();
    }
  };

  return (
    <Container>
        <div id="wrapper">
          <aside>
            {!loading &&
              chatList.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setCurrentChat(chat.id)}
                  className={currentChat === chat.id ? 'active' : ''}
                >
                  {chat.name}
                </div>
              ))
            }
          </aside>
          <section id="chat">
            {!loading && currentChat && (
              <>
                <div id="messages">
                  {chatHistory[currentChat] && chatHistory[currentChat].map((chat, index) => {
                    if (chat.message.length > 0) {
                      return <div
                        ref={lastMessageRef}
                        className={
                          chat.sender === user.name
                            ? 'user-message': 'seller-message'
                        }
                        key={`${chat.sender}-me-${index}`}
                      >
                        <p>{chat.message}</p>
                      </div>
                    }
                    return null;
                  }
                  )}
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
    </Container>
  );
};

export default Chat;
