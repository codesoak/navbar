import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen, faLaptop, faTablet, faClock, faGamepad, faArrowUp, faHouse, faKeyboard, faPerson, faShirt, faSocks } from '@fortawesome/free-solid-svg-icons'
import './index.css'

export default function Sidebar() {
    return (
        <main>
            <SidebarComponent />
            <div className='dashboard'>
                Dashboard
            </div>
        </main>
    )
}

function SidebarComponent() {
    return (
        <div className='sidebar'>
            <button>
                <FontAwesomeIcon icon={faHouse} style={{ color: 'white' }} />
                Home
            </button>
            <Electronics />
            <MenWear />
        </div>
    )
}

function Electronics() {
    const [visible, setVisible] = useState(false)
    return (
        <div className='category'>
            <button onClick={() => setVisible(!visible)}>
                <FontAwesomeIcon icon={faKeyboard} style={{ color: 'white' }} />
                Electronics
            </button>
            <div className={`subCategory ${visible ? 'visible' : ''}`}>
                <button>
                    <FontAwesomeIcon icon={faLaptop} style={{ color: 'white' }} />
                    Laptops
                </button>
                <button>
                    <FontAwesomeIcon icon={faMobileScreen} style={{ color: 'white' }} />
                    Phones
                </button>
                <button>
                    <FontAwesomeIcon icon={faTablet} style={{ color: 'white' }} />
                    Tablets
                </button>
                <button>
                    <FontAwesomeIcon icon={faClock} style={{ color: 'white' }} />
                    Smart Watches
                </button>
                <button>
                    <FontAwesomeIcon icon={faGamepad} style={{ color: 'white' }} />
                    Game Consoles
                </button>
            </div>
        </div>
    )
}

function MenWear() {
    const [visible, setVisible] = useState(false)
    return (
        <div className='category'>
            <button onClick={() => setVisible(!visible)}>
                <FontAwesomeIcon icon={faPerson} style={{ color: 'white' }} />
                Men's Wear
            </button>
            <div className={`subCategory ${visible ? 'visible' : ''}`}>
                <button>
                    <FontAwesomeIcon icon={faShirt} style={{ color: 'white' }} />
                    Shirts
                </button>
                <button>
                    <FontAwesomeIcon icon={faSocks} style={{ color: 'white' }} />
                    Socks
                </button>
            </div>
        </div>
    )
}