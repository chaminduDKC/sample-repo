import React from 'react'

function Navbar() {
    const [showSidebar,setShowSidebar] = React.useState(false);

    const toggleMenu = ()=>{
        setShowSidebar(!showSidebar)
    }
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>React</h1>
      </div>
      <div className={showSidebar ? 'links active' : 'links'}>
        <ul>
            <li>Blog</li>
            <li>Products</li>
            <li>About</li>
            <li>Login</li>
        </ul>
      </div>
      <div className="icons">
        {showSidebar ? <i onClick={toggleMenu} className='fas fa-times'></i>
        : <i onClick={toggleMenu} className='fas fa-bars'></i>
        }
      </div>
    </div>
  )
}

export default Navbar
