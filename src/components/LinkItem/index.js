import { FiX, FiCopy} from 'react-icons/fi'
import './link-item.css'

function LinkItem({ closeModal, content }) {  
 const copyLink = async () => {
    await navigator.clipboard.writeText(content.link) 
 }

 return (
    <div className='modal-container'>
        <div className='modal-header'>
            <h2>Link encurtado:</h2>
            <button type='button' onClick={closeModal}>
                <FiX size={28} color='#132740' />
            </button>
        </div>

        <span>
            {content.long_url}
        </span>

        <button type='button' className='modal-link' title='Copiar' onClick={copyLink}>
            {content.link}
            <FiCopy size={20} color='#fff' />
        </button>
    </div>
 )
}

export default LinkItem