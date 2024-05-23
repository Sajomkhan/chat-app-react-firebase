import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      {/* ============= Top Div ============== */}
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor veniam?</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      {/* ============= Center Div ============== */}
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              sapiente laborum alias ex, quas obcaecati? Officia ea dolore
              aliquid quia nesciunt voluptatum quisquam sunt eum enim.
              Voluptatem aperiam cum fuga.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              sapiente laborum alias ex, quas obcaecati? Officia ea dolore
              aliquid quia nesciunt voluptatum quisquam sunt eum enim.
              Voluptatem aperiam cum fuga.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://p0.pxfuel.com/preview/440/625/255/cosmos-flower-cosmos-plant-pink-flowers-pictures-of-flowers-royalty-free-thumbnail.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              sapiente laborum alias ex, quas obcaecati? Officia ea dolore
              aliquid quia nesciunt voluptatum quisquam sunt eum enim.
              Voluptatem aperiam cum fuga.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              sapiente laborum alias ex, quas obcaecati? Officia ea dolore
              aliquid quia nesciunt voluptatum quisquam sunt eum enim.
              Voluptatem aperiam cum fuga.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* ============= For end scroll ============== */}
        <div ref={endRef}></div>
      </div>
      {/* ============= Bottom Div ============== */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
