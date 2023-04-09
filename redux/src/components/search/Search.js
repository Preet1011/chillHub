import React from 'react'
import Navbar from '../layout/navbar'
import Home from '../home/home'
import './Search.css'

const Search = () => {
  return (
    <div>
    <Navbar/>
    <div id="searchbody">
        <h1 className="search_h1">Search</h1>
        <input type='text'defaultValue={"search"} id='inputbutton'></input>

        <div id='search_container'>
            <div id="ids">
                <img id="searc_img" src="https://media.licdn.com/dms/image/D5635AQGPv1IfcEuspQ/profile-framedphoto-shrink_400_400/0/1669385190283?e=1681232400&v=beta&t=jSuk85pwB0JTXCIdIYRU9aGFfBh1MwIVyXFqFPeq5rc"></img>
                <h4>Hiimanshuuu_</h4>
                <button id='search_follow' ><a href='messages'>follow</a></button>
            </div>
            <div id="ids">
                <img id="searc_img" src="https://media.licdn.com/dms/image/D4D35AQFUAHmJj30cnQ/profile-framedphoto-shrink_400_400/0/1668580700462?e=1681232400&v=beta&t=loF3y-bV0ce54ok4vkFCg27X6Xa2MkumUixUmES_6CY"></img>
                <h4> DEVIL TYAGI</h4>
                <button id='search_follow' ><a href='messages'>follow</a></button>
            </div>
            <div id="ids">
                <img id="searc_img" src="https://media.licdn.com/dms/image/D4D03AQHAk5ebHt7UGA/profile-displayphoto-shrink_800_800/0/1677352595179?e=2147483647&v=beta&t=0vblM4UkoUQePymhqF4wG4hGf6lf0zohS6iRLrKDqlg"></img>
                <h4>Montu_garg</h4>
                <button id='search_follow' ><a href='messages'>follow</a></button>
            </div>
            <div id="ids">
                <img id="searc_img" src="https://media.licdn.com/dms/image/C4D16AQEu1j-IVQ8KXg/profile-displaybackgroundimage-shrink_350_1400/0/1668577944699?e=1686182400&v=beta&t=3KnNIa-GjhKMQ_iOz9YhXo__z-R_pUjNi8KAyxLab6w"></img>
                <h4>Paras ramola</h4>
                <button id='search_follow' ><a href='messages'>follow</a></button>
            </div>
            
            <div id="ids">
                <img id="searc_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Vladimir_Putin_17-11-2021_%28cropped%29.jpg/1200px-Vladimir_Putin_17-11-2021_%28cropped%29.jpg"></img>
                <h4>VILAD PUTIN</h4>
                <button id='search_follow' ><a href='messages'>follow</a></button>
            </div>
        </div>

    </div>
    <Home/>
    </div>
  )
}

export default Search   