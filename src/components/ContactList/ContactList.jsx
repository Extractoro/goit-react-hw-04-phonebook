import PropTypes from 'prop-types'
import s from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
      <>
        <p>Total contacts: {contacts.length}</p>
        <ul className={s['list']}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} id={id} className={s['item']}>
              <button
                onClick={() => onDeleteContact(id)}
                className={s['button']}
                type='Submit'>
                x
              </button>
              <div className={s['wrapper']}>
                <p className={s['text']}>{name}:</p>
                <p className={s['number']}>{number}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
      number: PropTypes.string.isRequired
    })
    
  )
}

export default ContactList