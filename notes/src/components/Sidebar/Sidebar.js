import React, { useState } from 'react';
import "./Sidebar.css";
import PlusIcon from "../../assets/img/plus-circle-solid-24.png"


const Sidebar = (props) => {
    const colors = [ "#fff","#fe9772", "#fec971", "#00d4fe", "#b693fd", "#e4ee91", "#ACC8E5"]
    const [listOpen, setlistOpen] = useState(false);

    return (
    <div className='sidebar'>
        <img src={PlusIcon} alt="Add" onClick={() => setlistOpen(!listOpen)}/>
        <ul className={`sidebar_list ${listOpen ?  "sidebar_list_active": ""}`}>
            {
                colors.map((item, index) => (
                    <li
                        key={index}
                        className="sidebar_list_item"
                        style={{backgroundColor: item}}
                        onClick={() => props.addNote(item)}
                        >
                    </li>
                ))
            }
        </ul>
    </div>
    )
}

export default Sidebar