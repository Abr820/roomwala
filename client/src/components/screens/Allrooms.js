import React, { useState, useEffect , useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import ShowRoom from "./Showroom";
import { UserContext } from "../../App";

const AllRooms = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const [page, setPage] = useState(0);
  const [pageMax,setPageMax] = useState(0);

  useEffect(() => {
    fetch("/allcount", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then(async (count) => {
        console.log({count})
        await setPageMax(count-1)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    fetch(`/allroom/${page}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.rooms);
      });
  }, [page]);

  const left = async() => {
    if(page > 0) {
      await setPage(page - 1)
    }
  }

  const right = async() => {
    if(page < pageMax) {
      await setPage(page + 1)
    }
  }


  return (
    <div className="container">
      <div className="section ">
        <div className="card-panel yellow darken-3 allrooms-panel">
          <h4 className="center-align ">
            Searching rooms in:
            <span style={{ color: "red" }}> Everywhere!🌍</span>
          </h4>
        </div>
        <div key="3" className="row">
          {/**************************************single-card***************************** */}
          {data.map((room) => {
            return (
              <div className="col s12 m4">
                <div className="allroom-card card hoverable yellow accent-2">
                  <div className="card-image  waves-effect waves-block waves-light">
                    <img
                      src={
                        room.mainPic !== "default path"
                          ? room.mainPic
                          : "https://picsum.photos/200"
                      }
                      alt="roompic"
                    />
                    <div className="card-rent card-title">
                      <h5>₹{room.rent}/Month</h5>
                    </div>
                  </div>
                  <div className="card-content">
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
                  
                  <div className="card-action">
                  {state &&
                    <button className="btn-flat orange waves-effect waves-light">
                      <i className="material-icons left">hotel</i>
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
          {/* *******************************************footer *******************************************/}
      <footer class="page-footer page transparent">
          <div class="container">
            <div>
              <div class="pagination">
                <div class="leftarrow left" onClick={left}>
                    <i class="material-icons medium">chevron_left</i>
                </div>
                <div className="rightarrow right" onClick={right}>
                    <i class="material-icons medium">chevron_right</i>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default AllRooms;
