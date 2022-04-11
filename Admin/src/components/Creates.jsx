import React from "react";

const Creates = ({ icon, text, text1, text2, text3, ...rest }) => {
  return (
    <div className="creates">
      <div className="icon-create">
        <i className={icon}></i>
        <span>{text}</span>
      </div>
      <div className="contain-create">
        <div className="form-create">
          <div className="box-create">
            <span>{text1}</span>
            <input type="text" />
          </div>

          <div className="box-create">
            <span>Times:</span>
            <input type="text" />
            <span>End</span>
            <input type="text" />
          </div>

          <div className="box-create">
            <span className="box-create">Exp</span>
            <textarea name="exp" id="exp"></textarea>
          </div>
        </div>
        <div className="form-create">
          <div className="box-create">
            <span>{text2}</span>
            <input type="text" />
          </div>
          <div className="box-create">
            <span>Times:</span>
            <input type="text" />
            <span>End</span>
            <input type="text" />
          </div>

          <div className="box-create">
            <span className="box-create">Exp</span>
            <textarea name="exp" id="exp"></textarea>
          </div>
        </div>
        <div className="form-create">
          <div className="box-create">
            <span>{text3}</span>
            <input type="text" />
          </div>
          <div className="box-create">
            <span>Times:</span>
            <input type="text" />
            <span>End</span>
            <input type="text" />
          </div>

          <div className="box-create">
            <span className="box-create">Exp</span>
            <textarea name="exp" id="exp"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creates;
