import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiLink, FiArrowLeft, FiTrash } from 'react-icons/fi'
import { getSavedLinks } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem/index'
import './links.css'

function MyLinks() {
  const [myLinks, setMyLinks] = useState([])
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const getLinks = async () => {
      const links = await getSavedLinks('@links-encurtado')

      if (links.length === 0) {
        console.log('Lista vazia')
      }
      
      setMyLinks(links)
    }

    getLinks()
  }, [])

  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to='/'>
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>Meus links</h1>
      </div>

      {myLinks.map(link => {
        return (
          <div key={link.id} className='links-item'>
            <button 
              type='button' 
              className='link' 
              onClick={() => {
                setData(link)
                setShowModal(true)
              }}>
              <FiLink size={18} color='#fff' />
              {link.long_url}
            </button>
            <button type='button' className='delete-item'>
              <FiTrash size={24} color='#FF5454' />
            </button>
          </div>
        )
      })}

      {showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  )
}

export default MyLinks