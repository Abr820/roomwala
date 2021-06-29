import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllRooms = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allroom",{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    })
    .then(res => res.json())
        .then(result => {
            console.log(result)
            setData(result.rooms)
        })
},[])

  return (
    <div className="container">
      <div className="section ">
        <div class="card-panel yellow darken-3 allrooms-panel">
          <h4 className="center-align ">
            Searching rooms in:
            <span style={{ color: "red" }}> Everywhere! </span>
          </h4>
        </div>
        {/* <br />
        <br /> */}
        <div class="row">
          {/**************************************single-card***************************** */}
          {
          data.map( room => {
            return (
          <div class="col s12 m4">
            <div class="card hoverable yellow accent-2">
              <div class="card-image  waves-effect waves-block waves-light">
                <img src= {room.mainPic !== "default path" ? room.mainPic:"https://picsum.photos/200"} />
                <span class="card-title">₹{room.rent}/Month</span>
              </div>
              <div class="card-content">
                <strong>{room.type}</strong>
                <p>
                  {room.city} , {room.state} 
                </p>
                <p>
                  Available For: {room.gender}
                </p>
              </div>
              <div class="card-action">
                {/* <a href="#">This is a link</a> */}

                <Link className="link blue-text" to="/showroom">
                  Show Details!
                </Link>
              </div>
            </div>
          </div>
          )
          })
          }
          {/* *******************************************card-ending *******************************************/}
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
