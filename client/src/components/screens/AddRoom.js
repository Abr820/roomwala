import React,{useState} from "react"
import {Link,useHistory} from "react-router-dom"
//import M from "materialize-css"
import "../../App.css"

const AddRoom = () => {
    const checkstyle = {    
        position: "relative",
        opacity: "1",
        pointerEvents: "all",
    }

    const history=useHistory()
    const [type,setType] = useState("")
    const [mainPic,setmainPic] = useState("")
    const [contactPhone,setContactPhone] = useState("")
    const [address,setAddress] = useState("")
    const [city,setCity] = useState("")
    const [state,setState] = useState("")
    const [zip,setZip] = useState("")
    const [utilitiesInc,setUtility] = useState("")
    const [rent,setRent] = useState("")
    const [description,setDescription] = useState("")
    const [maritalStatus,setStatus] = useState("")
    const [gender,setGender] = useState("")
    const [email,setEmail] = useState("")

    const submit = (e) =>{
        e.preventDefault()
        console.log(type)
        console.log(mainPic)
        console.log(contactPhone)
        console.log(address)
        console.log(city)
        console.log(state)
        console.log(zip)
        console.log(utilitiesInc)
        console.log(rent)
        console.log(description)
        console.log(maritalStatus)
        console.log(gender)
        console.log(email)
    }
    

    return (
        <div className="myCard">
        {/* //header */}
        <div className="">
            <h1 className="center bold">Add New Room</h1>
        </div>

        {/* //form */}
        <div className="card auth-card" style={{display:"flex"}}>
        <p>Room Details</p>
        <hr></hr>
            <form onSubmit={submit}>
                <div>
                <label className="">Room Type</label>
                <select className="browser-default" name="type" onChange={(e) => setType(e.target.value)}>
                    <option value="Private">Private</option>
                    <option value="Shared">Shared</option>
                </select>
                </div>

                <label className="">Utilities Included</label>
                <div>
                
                <input
                    id="input1"
                    name="utilitiesInc"
                    type="radio"
                    value="true"
                    style={checkstyle}
                    onChange={(e) => setUtility(e.target.value)}
                    //className="browser-default"
                />
                
                <label className="" for="input1">Yes</label>
                </div>
                <div>
                <input
                    id="input2"
                    name="utilitiesInc"
                    type="radio"
                    value="false"
                    style={checkstyle}
                    onChange={(e) => setUtility(e.target.value)}
                    //className="browser-default"
                />
                <label className="" for="input2">No</label>
                </div>
                
                <div>
                <label className="">Expected tenant's gender:</label>
                <select className="browser-default" name="gender" onChange={(e) => setGender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Any">Any</option>
                </select>
                </div>
                
                <div>
                <label className="">Marital Status:</label>
                <select className="browser-default" name="maritalStatus" onChange={(e) => setStatus(e.target.value)}>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Married">Married</option>
                    <option value="Any">Any</option>
                </select>
                </div>
                

                <label className="">Address</label>
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <label className="">City</label>
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <label className="">State</label>
                <input
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />

                <label className="">Zip</label>
                <input
                    type="number"
                    placeholder="XXXXXX"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                />

                <label className="">Rent</label>
                <input
                    type="number"
                    placeholder="Rs."
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                />

                <label className="">Description</label>
                <textarea
                    type="text"
                    placeholder="Describe about the room and facilities"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <p>For Tenants to contact:</p>
                <label className="">E-Mail</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="">Phone</label>
                <input
                    type="phone"
                    placeholder="Phone/Mobile Number"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                />

                <hr></hr>

                <label className="">Image:</label>
                <input
                    type="file"
                    name="MainPic"
                    value={mainPic}
                    onChange={(e) => setmainPic(e.target.value)}
                />

                <div>
                <input
                    type="submit"
                />
                </div>

            </form>
        </div>

        </div>
    )
}

export default AddRoom