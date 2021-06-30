import React, { useState, useEffect , useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import ShowRoom from "./Showroom";
import { UserContext } from "../../App";
import { useLocation } from "react-router-dom";

const CityRooms = (props) => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const location = useLocation();
  useEffect(() => {
      console.log(location)
      fetch(`/city/${location.state.detail}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setData(result.rooms)
        })
        .catch((err) => {
          console.log(err);
        })
  }, [location]);

  // const show = (roomid) => {
  //   console.log("Call begin ",roomid)
  //   history.push({
  //     pathname: "/showroom",
  //     state: {detail : {roomid}}
  //   })
  // }

  return (
    <div className="container">
      <div className="section ">
        <div class="card-panel yellow darken-3 allrooms-panel">
          <h4 className="center-align ">
            Searching rooms in:
            <span style={{ color: "red" }}> {location.state.detail}</span>
          </h4>
        </div>
        {/* <br />
        <br /> */}
        <div key="3" class="row">
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
                  {state &&
                    <button className="btn-flat orange waves-effect waves-light">
                      <i class="material-icons left">hotel</i>
                      <Link
                        className="link"
                        to={{
                          pathname: "/showroom",
                          search: `?query=${room._id}`,
                          state: { detail: room._id },
                        }}
                      >
                        Show Room Details!
                      </Link>
                    </button>
                  }
                    {/* <h6 onClick={() => show(room._id)}>SHOW DETAILS</h6> */}
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

export default CityRooms;
