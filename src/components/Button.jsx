/* eslint-disable react/prop-types */
function Button({ style, aFunction, children }){
    return(
        <button type="button" className={style} onClick={aFunction}>
            {children}
        </button>
    )
}

export default Button