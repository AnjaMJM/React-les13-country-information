import "./Button.css"

function Button({handleClick, buttonText}) {
    return (
        <div>
            <button type="button" onClick={handleClick}>{buttonText}</button>
        </div>
    );
}

export default Button;