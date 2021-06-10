import React,{useContext,useEffect, useState} from "react"
import { Link,useHistory } from "react-router-dom"
import {UserContext} from "../../App"
import "../../App.css"

const Profile = () => {
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()

    const [age,setAge] = useState("")
    const [city,setCity] = useState("")
    const [profession,setProfession] = useState("")
    const [gender,setGender] = useState("")
    const [marital_status,setStatus] = useState("")
    const [about,setAbout] = useState("")
    const [profilePic,setProfilePic] = useState("")

    useEffect(() => {
      fetch("/myProfile",{
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          }
      })
      .then(res => res.json())
          .then(result => {
              //console.log(result)
              setData(result)
              history.push("/profile")
          })
  },[])

  return (
    <div style={{maxWidth:"1200px" , margin:"0px auto"}}>
    {/* picture on left */}
      <div>
        <img
          style={{width:"160px",height:"160px",borderRadius:"80px"}}
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651__480.png"
        />
      </div>

      <div>
        <label className="" for="profileId">Update Profile Image</label>
        <input
          id="profileId"
          type="file"
          name="profilepic"
          onChange={(e) => setProfilePic(e.target.value)}
        />
      </div>

      {/* details on right */}
      <div>
        <div>
          <label className="" for="nameid">Name</label>
          <input
            id="nameid"
            placeholder={data.name}
            name="name"
            readOnly
          />
        </div>

        <div>
          <label className="" for="emailId">Email</label>
          <input
            id="emailId"
            placeholder={data.email}
            name="email"
            readOnly
          />
        </div>

        <div>
          <label className="" for="ageId">Age</label>
          <input
            id="ageId"
            type="number"
            placeholder={data.age}
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label className="" for="cityId">City</label>
          <input
            id="cityId"
            type="text"
            placeholder={data.city}
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label className="" for="professionId">Profession</label>
          <input
            id="professionId"
            type="text"
            placeholder={data.profession}
            name="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>

        <div>
          <label className="" for="genderId">Gender</label>
          <select className="browser-default" id="genderId" name="gender" onChange={(e) => setGender(e.target.value)}>
              <option selected="selected">Select your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label for="statusId">Marital Status</label>
          <select className="browser-default" id="statusId" name="status" onChange={(e) => setStatus(e.target.value)}>
              <option selected="">Select your Marital Status</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Married">Married</option>
          </select>
        </div>

        <div>
          <label className="" for="phoneId">Phone Number</label>
          <input
              id="phoneId"
              type="number"
              placeholder={data.phone}
              name="phone"
              readOnly
          />
        </div>

        <div>
          <label className="" for="aboutId">About</label>
          <input
            id="aboutId"
            type="text"
            name="about"
            placeholder={data.about}
            value={data.about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
