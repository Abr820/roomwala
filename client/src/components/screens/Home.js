import React from "react";

const Home = () => {
  return (
    <>
      <div class="section no-pad-bot" id="index-banner">
        <div class="container">
          <br />
          <br />
          <h1 class="header center orange-text">
            Find Your New Place with Room-Wala
          </h1>
          <div class="row center">
            <h5 class="header col s12 light">
              Easy as making friends, with roomie you can look for many rooms
              available across the country.
            </h5>
          </div>
          <div class="row center">
             {/* <a
              href="http://materializecss.com/getting-started.html"
              id="download-button"
              class="btn-large waves-effect waves-light orange"
            >
              Get Started
            </a> 
             */}
             
            <div class="sm:py-4 lg:self-center"><img class="p-4 w-full sm:w-3/4 mx-auto lg:w-auto" src="https://blush.design/api/download?shareUri=XjBBvmxsvVzVKA2U&c=Clothing_0%7Eff4b33-0.1%7Eff8333&w=800&h=800&fm=png" alt="Rooms"/></div>
          
          </div>
          <br />
          <br />
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center light-blue-text">
                  <i class="material-icons">Room wala</i>
                </h2>
                <h5 class="center">Speeds up development</h5>

                <p class="light">
                  We did most of the heavy lifting for you to provide a default
                  stylings that incorporate our custom components. Additionally,
                  we refined animations and transitions to provide a smoother
                  experience for developers.
                </p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center light-blue-text">
                  <i class="material-icons">Room wala</i>
                </h2>
                <h5 class="center">User Experience Focused</h5>

                <p class="light">
                  By utilizing elements and principles of Material Design, we
                  were able to create a framework that incorporates components
                  and animations that provide more feedback to users.
                  Additionally, a single underlying responsive system across all
                  platforms allow for a more unified user experience.
                </p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center light-blue-text">
                  <i class="material-icons">contact us</i>
                </h2>
                <h5 class="center">Easy to work with</h5>

                <p class="light">
                  We have provided detailed documentation as well as specific
                  code examples to help new users get started. We are also
                  always open to feedback and can answer any questions a user
                  may have about Materialize.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <footer class="page-footer orange">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Company Bio</h5>
              <p class="grey-text text-lighten-4">
                We are a team of college students working on this project like
                it's our full time job. Any amount would help support and
                continue development on this project and is greatly appreciated.
              </p>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Settings</h5>
              <ul>
                <li>
                  <a class="white-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Connect</h5>
              <ul>
                <li>
                  <a class="white-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            Made by{" "}
            <a
              class="orange-text text-lighten-3"
              href="http://materializecss.com"
            >
              Materialize
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;