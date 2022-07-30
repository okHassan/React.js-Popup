import React from 'react'
import Popup from 'reactjs-popup';
import './Popup/Popup.css'
import PopUp from './Popup';

const App = () => {
    return (
        <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            nested
        >
            {close => (
                <PopUp close = {close}/>
            )}
        </Popup>

    )
}

export default App