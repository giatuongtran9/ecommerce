import { FormInputContainer, FormInputText, FormInputLabel} from "./FormInput.style.jsx"

const FormInput = ({ label, ...otherProps }) => {
    return (
        <FormInputContainer>
            <FormInputText {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </FormInputContainer>
    )
}

export default FormInput