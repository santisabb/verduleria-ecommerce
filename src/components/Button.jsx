/* eslint-disable react/prop-types */
function Button({ style, aFunction, isDisabled, children }){
    return(
        <button type="button" className={style} onClick={aFunction} disabled={isDisabled ? true : false}>
            {children}
        </button>
    )
}

export default Button