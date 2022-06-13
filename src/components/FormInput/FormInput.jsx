import "./FormInput.scss"

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="forminput-container">
            <input className="forminput" {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''} forminput-label`}>
                    {label}
                </label>
            )}
        </div>
    )
}

export default FormInput