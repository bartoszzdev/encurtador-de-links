import React, { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import { FaRegHandPointDown } from 'react-icons/fa'
import LinksButton from '../../components/Menu/index'
import LinkItem from '../../components/LinkItem/index'
import api from '../../services/api'
import { saveLinks } from '../../services/storeLinks'
import './home.css'

function Home() {
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const handleShortLink = async () => {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)
      saveLinks('@links-encurtado', response.data)
      setLink('')
    }
    catch {
      alert('Oops link não encontrado...')
      setLink('')
    }
  }

  return (
    <div className='container-home'>
      <div className='logo'>
        <img src='/logo.png' alt='Logo' />
        <h1>MyLink</h1>
        <span>
          Cole seu link para encurtar <FaRegHandPointDown size={17} />
        </span>
      </div>

      <div className='input-area'>
        <div>
          <FiLink size={24} color='#fff' />
          <input
            value={link}
            onChange={(event) => {
              setLink(event.target.value)
            }}
            placeholder='Cole seu link aqui...'
          />
        </div>

        <button type='button' onClick={handleShortLink}>
          Gerar link
        </button>
      </div>

      <LinksButton />

      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  )
}

export default Home