import React, { useState, useEffect } from "react";

const ShowRoom = () => {
  return (
    <div className="container">
    <div class="col s12 m7 ">
    <div class="card-panel yellow darken-3">
          <h4 className="center-align">
            🏘️ ROOM INFORMATION 👇
          </h4>
        </div>
      <div class="card horizontal large hoverable yellow accent-2">
        <div class="card-image">
          <img src="https://picsum.photos/id/237/200/300" alt="roompic" />
        </div>
        <div class="card-stacked">
          <div class="card-content">
          <h4>Address</h4>
          <h4>Roomtype</h4>
          <h4>Rent</h4>
          <h5>phone</h5>
          <h5>Email</h5>
          <h4>utilities included</h4>
          <h4>description</h4>
            <p>
              I am a very simple card. I am good at containing small bits of
              information.
            </p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShowRoom;
