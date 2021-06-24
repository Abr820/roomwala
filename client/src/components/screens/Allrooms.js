import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllRooms = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./");
  });

  return (
    <div className="container">
      <div className="section ">
        <div class="card-panel yellow darken-3 allrooms-panel">
          <h4 className="center-align ">
            Searching rooms in:
            <span style={{ color: "red" }}> Everywhere! 🌎</span>
          </h4>
        </div>
        {/* <br />
        <br /> */}
        <div class="row">
          <div class="col s12 m4">
            <div class="card hoverable yellow accent-2">
              <div class="card-image  waves-effect waves-block waves-light">
                <img src="https://picsum.photos/200" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
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
          <div class="col s12 m4">
            <div class="card hoverable yellow accent-2">
              <div class="card-image  waves-effect waves-block waves-light">
                <img src="https://picsum.photos/200" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                {/* <a href="#">This is a link</a> */}

                <Link className="link" to="/showroom">
                  Show Details!
                </Link>
              </div>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="card hoverable yellow accent-2">
              <div class="card-image  waves-effect waves-block waves-light">
                <img src="https://picsum.photos/200" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                {/* <a href="#">This is a link</a> */}

                <Link className="link" to="/showroom">
                  Show Details!
                </Link>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card hoverable yellow accent-2">
              <div class="card-image  waves-effect waves-block waves-light">
                <img src="https://picsum.photos/200" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                {/* <a href="#">This is a link</a> */}

                <Link className="link" to="/showroom">
                  Show Details!
                </Link>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card hoverable yellow accent-2">
              <div class="card-image  waves-effect waves-block waves-light">
                <img src="https://picsum.photos/200" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                {/* <a href="#">This is a link</a> */}

                <Link className="link" to="/showroom">
                  Show Details!
                </Link>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card hoverable yellow accent-2">
              <div class="card-image  waves-effect waves-block waves-light">
                <img src="https://picsum.photos/200" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                {/* <a href="#">This is a link</a> */}

                <Link className="link" to="/showroom">
                  Show Details!
                </Link>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card hoverable yellow accent-2">
              <div class="card-image  waves-effect waves-block waves-light">
                <img src="https://picsum.photos/200" alt="roompic" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                {/* <a href="#">This is a link</a> */}

                <Link className="link" to="/showroom">
                  Show Details!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
