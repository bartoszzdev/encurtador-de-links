import { Link } from 'react-router-dom'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import './menu.css'

const LinksButton = () => {
    return (
        <Link to='/links'>
            <button type='button' className='links-btn'>
                Meus links
            </button>
        </Link>
    )
}

export default LinksButton