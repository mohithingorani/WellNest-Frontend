"use client";

import TextMessage2 from "@/components/TextMessage2";
import axios from "axios";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface MessageObject {
  message: string;
  id: string;
  time: string;
  username: string;
}



export default function Chats() {
  const [conversationSummary, setConversationSummary] = useState<string>("");
  const [inbox, setInbox] = useState<MessageObject[]>([]);
  const [message, setMessage] = useState<string>("");
  const [Error, setError] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiMessage,setAIMessage] = useState<string>("");
const fetchValue = async ( usermessage: string, aimessage="") => {
  try {
    const message = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ai`,{
      usermessage,
      aimessage,
      summary:conversationSummary

    })

    const response:{
      text:string,
      summary:string
    } =  message.data;
    setConversationSummary(response.summary);
    setAIMessage(response.text);
    return response.text;

    
  } catch (error) {
    console.log(error);
  }
};






  const getTime = () => {
    const dateWithoutSecond = new Date();
    const currentTime = dateWithoutSecond.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return currentTime;
  };

 async function handleSendMessage() {
  if (!message.trim()) return;

  const myMessage: MessageObject = {
    message,
    id: "user",
    time: getTime(),
    username: "User",
  };

  setInbox((prev) => [...prev, myMessage]);
  setMessage("");
  setIsLoading(true);

  try {
    const response = await fetchValue(message, conversationSummary,);

    if (response) {
      const botMessage: MessageObject = {
        message: response,
        id: "bot",
        time: getTime(),
        username: "Veronica",
      };
      setInbox((prev) => [...prev, botMessage]);
    }
  } catch (e) {
    console.error("Error fetching chat response:", e);
    setError(true);
  } finally {
    setIsLoading(false);
  }
}

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [inbox]);

  if (Error) {
    return <div className="text-white">Can&apos;t Connect.. Retry</div>;
  }

  return (
    <>
      <div
        className="flex justify-center h-screen bg-[#222222]"
        style={{
          backgroundImage: `url(/background.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col max-w-2xl w-full h-[90vh] mt-8">
          <div className="flex flex-col flex-grow bg-[#0D0D0D]/50  p-8 overflow-y-auto shadow-lg rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 mx-4">
            <div className="text-white text-2xl flex justify-start   w-full  items-center gap-2">
              <Image src={"/avatar.svg"} width="50" height="50" alt="avatar" />
              <div>
                <div>Veronica</div>
                {isLoading && <div className="text-sm text-green-300">Typing ...</div>}
              </div>
            </div>
            {inbox.map((messageObject, index) => (
              <TextMessage2
                key={index}
                messageObject={messageObject}
                myId={"user"} // Ensure this is the correct value
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex justify-between gap-3 p-4 bg-[#0D0D0D] shadow-md rounded-xl mt-4 mx-4">
            <input
              type="text"
              value={message}
              className="w-full px-3 py-1.5 resize-none text-white backdrop-filter backdrop-blur-sm border rounded-xl shadow-md border-none"
              style={{ backgroundColor: "#0D0D0D" }}
              placeholder="Enter text"
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              className={` ${isLoading ? "cursor-not-allowed hover:scale-110 bg-green-200":"cursor-pointer bg-green-500" } px-4 py-2 rounded-lg`}
              disabled={isLoading}
            >
              Send
            </button>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
