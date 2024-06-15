import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authenticate/authentication.component'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<h1>Hello Matt!</h1>} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
