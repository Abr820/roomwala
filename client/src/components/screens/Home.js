import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AlgoliaPlaces from "algolia-places-react";

function Home(props) {
  const [citySelected, setCitySelected] = useState("");
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="container home-left">
        <div className="row">
          <div className="col s12 m6">
            {/* *******************heading *******************/}
            <div className="card-panel1 heading-card1">
              <h1 className="header center black-text">
                Find Your New Place with{" "}
                <span className="span-room">🏠ROOMWALA!</span>
              </h1>
            </div>

            {/***************************** * algolia********************************* */}
            <div className="card-panel1">
              <div className="center">
                <h4 className="heading-card2">
                  Easy as making friends, with roomie you can look for many
                  rooms available across the country.🌏
                </h4>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <AlgoliaPlaces
                  placeholder="Enter a City"
                  options={{
                    appId: process.env.REACT_APP_APP,
                    apiKey: process.env.REACT_APP_APPK,
                    // language: "sv",
                    countries: ["in"],
                    type: "city",
                    // Other options from https://community.algolia.com/places/documentation.html#options
                  }}
                  onChange={({ suggestion }) => {
                    let state = suggestion.hasOwnProperty("administrative")
                      ? suggestion.administrative
                      : suggestion.hit.administrative[0];
                    setCitySelected(`${suggestion.name}, ${state}`);
                  }}
                  onError={({ message }) =>
                    console.log("Sorry, error with the API! ❌")
                  }
                />

                <input
                  className="waves-effect btn-large purple accent-3 pulse"
                  // className="mt-4 sm:mt-0 bg-themeYellow mx-1 px-3 py-1 lg:ml-6 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
                  type="submit"
                  value="Search"
                />
              </form>
            </div>
            <div className="allroom-link">
              <h6>
                <Link
                  style={{ color: "red", cursor: "pointer" }}
                  to="/allrooms"
                >
                  All available rooms!
                </Link>
              </h6>
            </div>
          </div>
          {/* ***************image************************ */}
          <div className="col s12 m6">
            <div className="home-image">
              <img
                className="responsive-img"
                src="https://cdn.pixabay.com/photo/2017/01/23/16/35/home-2003069_960_720.png"
                alt="Rooms"
              />
            </div>
          </div>
        </div>
      </div>

      {/* *************************card menu******************************* */}
      <div className="container home-card">
        <div className="section">
          <div className="row">
            {/* about******************************** */}
            <div className="col s12 m4">
              <div class="card aboutcard hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    class="activator"
                    src="https://image.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    About Us!<i class="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="#">This is a link</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    About Us!<i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            {/* contact ****************************** */}
            <div className="col s12 m4">
              <div class="card contactcard hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    class="activator"
                    src="https://image.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg"
                    alt="pic"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Contact Us!<i class="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="#">This is a link</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Contact Us!<i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            {/* support************************************** */}
            <div className="col s12 m4">
              <div class="card supportcard hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    class="activator"
                    src="https://image.freepik.com/free-vector/meet-our-team-concept-landing-page_52683-12190.jpg"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Support Us!<i class="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="#">This is a link</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Support Us!<i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* ********************************footer************************************ */}
      <footer className="page-footer orange">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Company Bio</h5>
              <p className="grey-text text-lighten-4">
                We are a team of college students working on this project like
                it's our full time job. Any amount would help support and
                continue development on this project and is greatly appreciated.
              </p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Settings</h5>
              <ul>
                <li>
                  <a className="white-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li>
                  <a className="white-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by{" "}
            <a
              className="orange-text text-lighten-3"
              href="http://materializecss.com"
            >
              Materialize
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
