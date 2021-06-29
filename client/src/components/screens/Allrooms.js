import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllRooms = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allroom", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.rooms);
      });
  }, []);

  return (
    <div className="container">
      <div className="section ">
        <div class="card-panel yellow darken-3 allrooms-panel">
          <h4 className="center-align ">
            Searching rooms in:
            <span style={{ color: "red" }}> Everywhere!🌏</span>
          </h4>
        </div>
        {/* <br />
        <br /> */}
        <div class="row">
          {/**************************************single-card***************************** */}
          {data.map((room) => {
            return (
              <div class="col s12 m4">
                <div class="allroom-card card hoverable yellow accent-2">
                  <div class="card-image  waves-effect waves-block waves-light">
                    <img
                      src={
                        room.mainPic !== "default path"
                          ? room.mainPic
                          : "https://picsum.photos/200"
                      }
                      alt="roompic"
                    />
                    <div class="card-rent card-title">
                      <h5>₹{room.rent}/Month</h5>
                    </div>
                  </div>
                  <div class="card-content">
                    <div className="room-type center">
                      <strong>{room.type}</strong>
                    </div>

                    {/* <br/> */}
                    {/* <br/> */}
                    <div className="room-city">
                      <h5>
                        {room.city}, {room.state}
                      </h5>
                    </div>
                    <h5 className="room-city1">
                      Available For {room.gender} !
                    </h5>
                  </div>
                  <div class="card-action">
                    {/* <a href="#">This is a link</a> */}

                    <Link className="link blue-text" to="/showroom">
                      Show Details!
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          {/* *******************************************card-ending *******************************************/}
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
