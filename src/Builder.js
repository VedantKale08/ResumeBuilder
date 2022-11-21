import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css';



function Builder() {

   const [image, setImage] = useState(null)
   const [selectedImage, setSelectedImage] = useState(null)

   // const onImageChange = (event) => {
   //    set
   // }
   const [data, setData] = useState({
      fname: "", lname: "", email: "", phone: 0, 
      address: "", city: "", state: "", zip: 0,
      sName: "", sFrom: "", sTo: "", sPer: 0,
      cName: "", cFrom: "", cTo: "", cPer: 0,
      dName: "", dCourse: "",
      dFrom1: "", dTo1: "", dPer1: 0,
      dFrom2: "", dTo2: "", dPer2: 0,
      dFrom3: "", dTo3: "", dPer3: 0,
      pName1: "", pSum1: "", pLink1: "",
      pName2: "", pSum2: "", pLink2: "",
      pName3: "", pSum3: "", pLink3: "",
      h1: "", h2: "", h3: "", h4: "", h5: "", h6: "",
      s1: "", s2: "", s3: "", s4: "", s5: "", s6: "",
      l1: "", l2: ""
   })
   useEffect(() => {
      if (selectedImage) {
         setImage(URL.createObjectURL(selectedImage));
       }
   }, [selectedImage])

   const handleChange = (e) => {
      let name = e.target.name
      let value = e.target.value

      setData({ ...data, [name]: value })
   }

   const create = () => {
      if (!data.fname || !data.lname || !data.email || !data.phone || !data.address || !data.sName || !data.sFrom || !data.sTo || !data.sPer || !data.pName1 || !data.pSum1 || !data.pLink1 || !data.h1 || !data.s1 || !data.l1 || !data.l2) {
         alert("Enter Required Fields")

      }
      else {
         navigate("/resume", { state: {data,image} })

   }
}

const navigate = useNavigate();
return (
   <>
      <div className="App">
         <div className="form">
            <p className='p'>Build Your Resume</p>
            <div className="nameSection">
               <h1  >What is your Name?</h1>
               <input type="text" placeholder="First Name* " name='fname' onChange={handleChange} />
               <input type="text" placeholder="Last Name* " name='lname' onChange={handleChange} style={{ marginLeft: "1rem" }} />
            </div>

            <br></br>
            <br></br>
            <hr></hr>

            <div className="imageSection">
               <h1  >Add Your Photo</h1>
               <input type="file" accept="image/*" onChange={e => setSelectedImage(e.target.files[0])} />
            </div>

            <br></br>
            <br></br>
            <hr></hr>

            <div className="contactSection">
               <h1  >Contact Info</h1>
               <input type="email" placeholder="name@example.com*" name='email' onChange={handleChange} style={{ width: "18rem" }} />
               <input type="number" placeholder="Mobile No*" name='phone' onChange={handleChange} style={{ marginTop: "1rem", width: "18rem" }} />
            </div>

            <br></br>
            <br></br>
            <hr></hr>

            <div className="addressSection">
               <h1 >Address Info</h1>
               <textarea type="text" placeholder="Address*" name='address' onChange={handleChange} style={{ width: "26rem", }} />
               <div style={{ display: "flex" }}>
                  <input type="text" placeholder="City*" name='city' onChange={handleChange} style={{ marginTop: "1rem" }} />
                  <input type="text" placeholder="State*" name='state' onChange={handleChange} style={{ marginTop: "1rem", marginLeft: "1rem" }} />
               </div>
               <input type="number" placeholder="Zip*" name='zip' onChange={handleChange} style={{ marginTop: "1rem" }} />
            </div>

            <br></br>
            <br></br>
            <hr></hr>

            <div className="eduSection">
               <h1 >Add Education</h1>
               <h3>10th Education</h3>
               <input type="text" placeholder="School Name*" name='sName' onChange={handleChange} style={{ width: "18rem" }} />
               <div style={{ display: "flex" }}>
                  <input type="text" placeholder="From Year*" name='sFrom' onChange={handleChange} style={{ marginTop: "1rem" }} />
                  <input type="text" placeholder="To Year*" name='sTo' onChange={handleChange} style={{ marginTop: "1rem", marginLeft: "1rem" }} />
               </div>
               <input type="number" placeholder="%*" name='sPer' onChange={handleChange} style={{ marginTop: "1rem", }} />

               <br />

               <h3 style={{marginTop:"1rem"}}>12th Education (optional)</h3>
               <input type="text" placeholder="College Name" name='cName' onChange={handleChange} style={{ width: "18rem" }} />
               <div style={{ display: "flex" }}>
                  <input type="text" placeholder="From Year" name='cFrom' onChange={handleChange} style={{ marginTop: "1rem" }} />
                  <input type="text" placeholder="To Year" name='cTo' onChange={handleChange} style={{ marginTop: "1rem", marginLeft: "1rem" }} />
               </div>
               <input type="number" placeholder="%" name='cPer' onChange={handleChange} style={{ marginTop: "1rem", }} />

               <br />

               <h1>OR</h1>

               <h3 style={{marginTop:"1rem"}}>Diploma Education (optional)</h3>
               <input type="text" placeholder="College Name" name='dName' onChange={handleChange} style={{ width: "18rem" }} />
               <input type="text" placeholder="Course" name='dCourse' onChange={handleChange} style={{ width: "18rem",marginTop:"1rem" }} />
               <h3>1st Year</h3>
               <div style={{ display: "flex" }}>
                  <input type="text" placeholder="From Year" name='dFrom1' onChange={handleChange} style={{}} />
                  <input type="text" placeholder="To Year" name='dTo1' onChange={handleChange} style={{ marginLeft: "1rem" }} />
               </div>
               <input type="number" placeholder="%" name='dPer1' onChange={handleChange} style={{ marginTop: "1rem", }} />

               <h3>2nd Year</h3>
               <div style={{ display: "flex" }}>
                  <input type="text" placeholder="From Year" name='dFrom2' onChange={handleChange} style={{}} />
                  <input type="text" placeholder="To Year" name='dTo2' onChange={handleChange} style={{ marginLeft: "1rem" }} />
               </div>
               <input type="number" placeholder="%" name='dPer2' onChange={handleChange} style={{ marginTop: "1rem", }} />

               <h3>3rd Year</h3>
               <div style={{ display: "flex" }}>
                  <input type="text" placeholder="From Year" name='dFrom3' onChange={handleChange} style={{}} />
                  <input type="text" placeholder="To Year" name='dTo3' onChange={handleChange} style={{ marginLeft: "1rem" }} />
               </div>
               <input type="number" placeholder="%" name='dPer3' onChange={handleChange} style={{ marginTop: "1rem", }} />
            </div>

            <br></br>
            <br></br>
            <hr></hr>

            <div className="projectSection">
               <h1 >Projects </h1>
               <h3>1st</h3>
               <input type="text" placeholder="Project Name*" name='pName1' onChange={handleChange} style={{}} />
               <textarea type="text" placeholder="Project Summary*" name='pSum1' onChange={handleChange} style={{ width: "26rem", marginTop: "1rem" }} />
               <input type="text" placeholder="Github Link*" name='pLink1' onChange={handleChange} style={{ marginTop: "1rem" }} />

               <br />
               <br />
               <h3>2nd (optional)</h3>
               <input type="text" placeholder="Project Name" name='pName2' onChange={handleChange} style={{}} />
               <textarea type="text" placeholder="Project Summary" name='pSum2' onChange={handleChange} style={{ width: "26rem", marginTop: "1rem" }} />
               <input type="text" placeholder="Github Link" name='pLink2' onChange={handleChange} style={{ marginTop: "1rem" }} />

               <br />
               <br />
               <h3>3rd (optional)</h3>
               <input type="text" placeholder="Project Name" name='pName3' onChange={handleChange} style={{}} />
               <textarea type="text" placeholder="Project Summary" name='pSum3' onChange={handleChange} style={{ width: "26rem", marginTop: "1rem" }} />
               <input type="text" placeholder="Github Link" name='pLink3' onChange={handleChange} style={{ marginTop: "1rem" }} />
            </div>

            <br></br>
            <br></br>
            <hr></hr>

            <div className="hobbiesSection">
               <h1 >Hobbies</h1>
               <input type="text" placeholder=" 1 Hobby*" name='h1' onChange={handleChange} style={{}} />
               <input type="text" placeholder=" 2 Hobby" name='h2' onChange={handleChange} style={{ marginLeft: "1rem" }} />
               <input type="text" placeholder=" 3 Hobby" name='h3' onChange={handleChange} style={{ marginTop: "1rem" }} />
               <input type="text" placeholder=" 4 Hobby" name='h4' onChange={handleChange} style={{ marginTop: "1rem", marginLeft: "1rem" }} />
               <input type="text" placeholder=" 5 Hobby" name='h5' onChange={handleChange} style={{ marginTop: "1rem" }} />
               <input type="text" placeholder=" 6 Hobby" name='h6' onChange={handleChange} style={{ marginTop: "1rem", marginLeft: "1rem" }} />
            </div>

            <br></br>
            <br></br>
            <hr></hr>

            <div className="skillSection">
               <h1 >Skills</h1>
               <input type="text" placeholder=" 1 Skill*" name='s1' onChange={handleChange} style={{}} />
               <input type="text" placeholder=" 2 Skill" name='s2' onChange={handleChange} style={{ marginLeft: "1rem" }} />
               <input type="text" placeholder=" 3 Skill" name='s3' onChange={handleChange} style={{ marginTop: "1rem" }} />
               <input type="text" placeholder=" 4 Skill" name='s4' onChange={handleChange} style={{ marginTop: "1rem", marginLeft: "1rem" }} />
               <input type="text" placeholder=" 5 Skill" name='s5' onChange={handleChange} style={{ marginTop: "1rem" }} />
               <input type="text" placeholder=" 6 Skill" name='s6' onChange={handleChange} style={{ marginTop: "1rem", marginLeft: "1rem" }} />
            </div>

            <br></br>
            <br></br>
            <hr></hr>

            <div className="linksSection">
               <h1 >Links</h1>
               <input type="text" placeholder=" Github Link*" name='l1' onChange={handleChange} style={{ width: "26rem" }} />
               <input type="text" placeholder=" LinkedIn Link*" name='l2' onChange={handleChange} style={{ width: "26rem", marginTop: "1rem" }} />

            </div>

            <br></br>
            <br></br>
            <hr></hr>

            <button onClick={create}>Create Resume</button>

         </div>
      </div>
      <div>

      </div>
   </>
)
}

export default Builder