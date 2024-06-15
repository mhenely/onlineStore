import './form-input.scss'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {/* if label exists, then render label */}
      {
        label && (
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  )
}

export default FormInput;