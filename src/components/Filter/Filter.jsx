import s from './Filter.module.css'
import PropTypes from 'prop-types'

const Filter = ({ value, onChange }) => {
  return (
      <label className={s['label']}>
        <p className={s['text']}>Filter contacts by name</p>
        <input
          className={s['input']}
          type='text'
          value={value}
          onChange={onChange}
        />
      </label>
    )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Filter