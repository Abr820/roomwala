import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ShowRoom = (props) => {
  //console.log("In the showroom ")
  const [data, setData] = useState([])
  const location = useLocation()



  useEffect(() => {
    console.log(location)
    fetch(`/room/${location.state.detail}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.room);
      });
  }, [location])

  return (
    <div className="container">
    <div class="col s12 m7 ">
    <div class="card-panel yellow darken-3 showroom-panel">
          <h4 className="center-align">
            🏘️ ROOM INFORMATION 👇
          </h4>
        </div>
      <div class="card horizontal large hoverable yellow accent-2">
        <div class="card-image">
          <img src= {(data.mainPic === "default path") ? "https://picsum.photos/id/237/200/300":data.mainPic} alt="roompic" />
        </div>
        <div class="card-stacked">
          <div class="card-content">
          <h6>Address:{data.address},{data.city},{data.state},{data.zip}</h6>
          <h6>Roomtype:{data.type}</h6>
          <h6>Rent: {data.rent}</h6>
          <h6>phone: {data.contactPhone}</h6>
          <h6>Email: {data.email}</h6>
          <h6>utilities included:{(data.utilitiesInc) ? "YES":"NO"}</h6>
          <h6>Allowed Gender: {data.gender}</h6>
          <h6>Marital Status: {data.maritalStatus}</h6>
          <h6>description:{data.description}</h6>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShowRoom;
