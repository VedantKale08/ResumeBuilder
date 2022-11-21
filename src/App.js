import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Builder from './Builder';
import Resume from './Resume';


function App() {
   return (
      <div>
            <Routes>
               
               <Route path='/' element={<Builder/>}></Route>
               <Route path='/resume' element={<Resume />}></Route>
            </Routes>
      </div>
   );
}

export default App;
