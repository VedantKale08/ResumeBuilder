import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { ImEarth } from 'react-icons/im'
import { SlBookOpen } from 'react-icons/sl'
import { BiRightArrow } from 'react-icons/bi'
import { BsFillTelephoneFill, BsGithub } from 'react-icons/bs'
import { AiOutlineMail, AiFillHome, AiFillLinkedin, AiFillProject } from 'react-icons/ai'
import { useReactToPrint } from 'react-to-print';

import './Resume.css';

function Resume() {
   const location = useLocation();

   const Component = useRef();
   const print = useReactToPrint({
       content : () => Component.current,
   });
   return (
      <>
         <div className="outerResume" ref={Component}>
            <div className="Resume" >
               <div className="left">
                  <div className="name">
                     <img src={location.state.image} className="img"></img>
                     <p >{location.state.data.fname}</p>
                     <p >{location.state.data.lname}</p>
                  </div>
                  <div className="personal">
                     <br></br>
                     <h3 ><CgProfile className='icons' /> Personal Details</h3>
                     <hr></hr>
                     <p className="ppp"><b><CgProfile /> Full Name</b></p>
                     <p className='per'>{location.state.data.fname} {location.state.data.lname}</p>
                     <br></br>

                     <p className="ppp"><b><BsFillTelephoneFill /> Phone No</b></p>
                     <p className='per'>{location.state.data.phone}</p>
                     <br></br>

                     <p className="ppp"><b><AiOutlineMail /> Email</b></p>
                     <p className='per'>{location.state.data.email}</p>
                     <br></br>

                     <p><b><AiFillHome /> Address</b></p>
                     <p className='per'>{location.state.data.address}, {location.state.data.state}, {location.state.data.city}, {location.state.data.zip}</p>
                     <br></br>

                     <p className="ppp"><b><AiFillLinkedin /> LinkedIn</b></p>
                     <a href={location.state.data.l2} className='per'>{location.state.data.l2}</a>
                     <br></br>

                     <p className="ppp"><b><BsGithub /> Github Link</b></p>
                     <a href={location.state.data.l1}  className='per'>{location.state.data.l1}</a>
                  </div>

                  <div className="hobbies">
                     <br></br>
                     <h3 ><CgProfile className='icons' /> Hobbies</h3>
                     <hr></hr>

                     {
                        location.state.data.h1 != "" ? <li className='per1'>{location.state.data.h1}</li> : " "
                     }
                     {
                        location.state.data.h2 != "" ? <li className='per1'>{location.state.data.h2}</li> : " "
                     }
                     {
                        location.state.data.h3 != "" ? <li className='per1'>{location.state.data.h3}</li> : " "
                     }
                     {
                        location.state.data.h4 != "" ? <li className='per1'>{location.state.data.h4}</li> : " "
                     }
                     {
                        location.state.data.h5 != "" ? <li className='per1'>{location.state.data.h5}</li> : " "
                     }
                     {
                        location.state.data.h6 != "" ? <li className='per1'>{location.state.data.h6}</li> : " "
                     }
                  </div>
               </div>




               <div className="right">
                  <div className="right-wrapper" style={{ marginTop: "1.5rem" }}>
                     <h3 ><SlBookOpen /> Education</h3>
                     <hr></hr>
                     {
                        location.state.data.sName != "" ?
                           <div className="tenth">
                              <br></br>
                              <div style={{ display: "flex", width: "100%" }}>
                                 <div style={{ flex: 1 }}>
                                    <p className="ppp"><b><BiRightArrow /> {location.state.data.sName}</b></p>
                                 </div>
                                 <div className='end'  >
                                    <p className="ppp"><b>{location.state.data.sFrom} - {location.state.data.sTo}</b></p>
                                 </div>
                              </div>
                              <p className='per2'>10th Passed {location.state.data.sPer}%</p>
                           </div>
                           :
                           ""
                     }


                     {
                        location.state.data.cName != "" ?
                           <div className="twelfth">
                              <br></br>
                              <div style={{ display: "flex", width: "100%" }}>
                                 <div style={{ flex: 1 }}>
                                    <p className="ppp"><b><BiRightArrow /> {location.state.data.cName}</b></p>
                                 </div>
                                 <div className='end'  >
                                    <p className="ppp"><b>{location.state.data.cFrom} - {location.state.data.cTo}</b></p>
                                 </div>
                              </div>
                              <p className='per2'>First Year :  {location.state.data.cPer}%</p>
                           </div>
                           :
                           ""
                     }
                     {
                        location.state.data.dName != "" ?
                           <div className="diploma">
                              <br></br>
                              <div style={{ display: "flex", width: "100%" }}>
                                 <div style={{ flex: 1 }}>
                                    <p className="ppp"><b><BiRightArrow /> {location.state.data.dName}</b></p>
                                 </div>
                                 <div className='end'  >
                                    <p><b>{location.state.data.dFrom1} - {location.state.data.dTo1}</b></p>
                                 </div>
                              </div>
                              <p className='per2'>First Year :  {location.state.data.dPer1}%</p>



                              <br></br>
                              <div style={{ display: "flex", width: "100%" }}>
                                 <div style={{ flex: 1 }}>
                                    <p className="ppp"><b><BiRightArrow /> {location.state.data.dName}</b></p>
                                 </div>
                                 <div className='end'  >
                                    <p className="ppp"><b>{location.state.data.dFrom2} - {location.state.data.dTo2}</b></p>
                                 </div>
                              </div>
                              <p className='per2'>Second Year :  {location.state.data.dPer2}%</p>



                              <br></br>
                              <div style={{ display: "flex", width: "100%" }}>
                                 <div style={{ flex: 1 }}>
                                    <p className="ppp"><b><BiRightArrow /> {location.state.data.dName}</b></p>
                                 </div>
                                 <div className='end' >
                                    <p className="ppp"><b>{location.state.data.dFrom3} - {location.state.data.dTo3}</b></p>
                                 </div>
                              </div>
                              <p className='per2'>Third Year :  {location.state.data.dPer3}%</p>
                           </div>
                           :
                           ""
                     }


                     <br></br>
                     <br></br>
                     <h3 ><AiFillProject /> Projects</h3>
                     <hr></hr>

                     {
                        location.state.data.pName1 != "" ?
                           <div className="p1">
                              <p className="ppp"><b><BiRightArrow /> {location.state.data.pName1}</b></p>
                              <p className='per2'>{location.state.data.pSum1}</p>
                              <a className='per2' href={location.state.data.pLink1}>{location.state.data.pLink1}</a>
                           </div>
                           :
                           ""
                     }
                     {
                        location.state.data.pName2 != "" ?
                           <div className="p1">
                              <br></br>
                              <p className="ppp"><b><BiRightArrow /> {location.state.data.pName2}</b></p>
                              <p className='per2'>{location.state.data.pSum2}</p>
                              <a className='per2' href={location.state.data.pLink2}>{location.state.data.pLink2}</a>
                           </div>
                           :
                           ""
                     }

                     {
                        location.state.data.pName3 != "" ?
                           <div className="p1">
                              <br></br>
                              <p className="ppp"><b><BiRightArrow /> {location.state.data.pName3}</b></p>
                              <p className='per2'>{location.state.data.pSum3}</p>
                              <a className='per2' href={location.state.data.pLink3}>{location.state.data.pLink3}</a>
                           </div>
                           :
                           ""
                     }


                     <br></br>
                     <br></br>
                     <h3 ><AiFillProject /> Skills</h3>
                     <hr></hr>

                     {
                        location.state.data.s1 != "" ? <li className='per3'>{location.state.data.s1}</li> : " "
                     }
                     {
                        location.state.data.s2 != "" ? <li className='per3'>{location.state.data.s2}</li> : " "
                     }
                     {
                        location.state.data.s3 != "" ? <li className='per3'>{location.state.data.s3}</li> : " "
                     }
                     {
                        location.state.data.s4 != "" ? <li className='per3'>{location.state.data.s4}</li> : " "
                     }
                     {
                        location.state.data.s5 != "" ? <li className='per3'>{location.state.data.s5}</li> : " "
                     }
                     {
                        location.state.data.s6 != "" ? <li className='per3'>{location.state.data.s6}</li> : " "
                     }
                  </div>
               </div>
            </div>
         </div>
         <div className='buttonSection'>
         <button onClick={print}>Download</button>
         </div>
      </>
   )
}

export default Resume