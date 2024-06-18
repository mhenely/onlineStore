import {FormInputLabel, Input, Group} from './form-input.jsx'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {/* if label exists, then render label */}
      {
        label && (
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
      )}
      <Input {...otherProps} />
    </Group>
  )
}

export default FormInput;