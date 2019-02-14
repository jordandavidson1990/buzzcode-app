import React from 'react'

const Header = (props) =>{
    return(
        <div className="upper-wrapper">
            <div className="logo">
            <h2  type="button" onClick={ props.refresh } id="buzzcode">BuzzCode</h2>
            <img className="image-logo"src="https://batenborch.com/blog/wp-content/uploads/2015/07/summer-holiday-hd-wallpaper-cupcakepedia-1024x640.jpg" alt="img"></img>
            </div>
        </div>
    )
}
export default Header