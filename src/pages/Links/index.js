import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiLink, FiArrowLeft, FiTrash } from 'react-icons/fi'
import { getSavedLinks, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem/index'
import './links.css'

function MyLinks() {
  const [myLinks, setMyLinks] = useState([])
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [emptyList, setEmptyList] = useState(false)

  useEffect(async () => {
    const links = await getSavedLinks('@links-encurtado')

    if (links.length === 0) {
      setEmptyList(true)
    }
    
    setMyLinks(links)
  }, [])

  const handleOpenLink = (link) => {
    setData(link)
    setShowModal(true)
  }

  const handleDeleteLink = async (id) => {
    const result = await deleteLink(myLinks, id)

    if (result.length === 0)  {
      setEmptyList(true)
    }

    setMyLinks(result)
  }

  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to='/'>
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>Meus links</h1>
      </div>

      {emptyList && (
        <h2 style={{marginTop: '48px'}}>
          Sua lista está vazia...
        </h2>
      )}

      {myLinks.map(link => {
        return (
          <div key={link.id} className='links-item'>
            <button type='button' className='link' onClick={() => handleOpenLink(link)}>
              <FiLink size={18} color='#fff' />
              {link.long_url}
            </button>
            <button type='button' className='delete-item' onClick={() => handleDeleteLink(link.id)}>
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