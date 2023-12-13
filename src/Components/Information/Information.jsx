import React from "react";
import "./infor.css";
import farm from "../../Assets/Image/farm1.jpg";

const mockdata = {
  ProductCode: 123456,
  Farm: "ABC",
  Procedure: "VietGap",
  Input: 1000,
  Output: 900,
  Fertilizer: "NPK",
};

const Information = () => {
  return (
    <section className="information">
      <div className="r-title">
        <button className="button">
          Mã truy xuất : {mockdata.ProductCode}
        </button>
      </div>

      <div className="r-content">
        <div className="r-infor">
          <div className="r-colum">
            <span>Mã sản phẩm: </span>
            <span className="r-properties">{mockdata.ProductCode}</span>
          </div>
          <div className="r-colum">
            <span>Nông trại sản xuất: </span>
            <span className="r-properties">{mockdata.Farm}</span>
          </div>
          <div className="r-colum">
            <span>Quy trình trồng: </span>
            <span className="r-properties">{mockdata.Procedure} </span>
          </div>
          <div className="r-colum">
            <span>Số lượng hạt giống đầu vào: </span>
            <span className="r-properties">{mockdata.Input}</span>
          </div>
          <div className="r-colum">
            <span>Số lượng đầu ra: </span>
            <span className="r-properties">{mockdata.Output}</span>
          </div>
          <div className="r-colum">
            <span>Các loại phân bón: </span>
            <span className="r-properties">{mockdata.Fertilizer}</span>
          </div>
        </div>

        <div className="r-time">
          <div className="r-event">
            <ul class="timeline">
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">April 2011 - heute</p>
                  <h3>Geil,Danke! GmbH</h3>
                  <p>Smartphones und Tablets (iOS, Android, Windows).</p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">
                    November 2009 - März 2011
                  </p>
                  <h3>Freelancer</h3>
                  <p>
                    Konzeption, Design und Produktion von Digitalen Magazinen
                    mit
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">April 2011 - heute</p>
                  <h3>konplan gmbh</h3>
                  <p>
                    Modellierung von Systemen und APIs für Digital Publishing
                    und
                  </p>
                </div>
              </li>

            </ul>
            <button className="btn">
              All event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
