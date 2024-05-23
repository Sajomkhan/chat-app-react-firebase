import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      {/* ========== User Heading =========== */}
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h3>Jone Doe</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {/* ========== User Info =========== */}
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          {/* ========== User Photos =========== */}
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="download-icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="download-icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
};

export default Detail;
