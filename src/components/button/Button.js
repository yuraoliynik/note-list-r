import "./Button.css";

function Button({buttonName, handleClick}) {
    return (
        <div className={'button'}>
            <button onClick={handleClick}>{buttonName}</button>
        </div>
    );
}

export default Button;
