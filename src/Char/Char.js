import './Char.css'
const char = (props) => {
    const inputStyle = {
        display: "inline-block", padding: "8px", textAlign: "center", margin: "16px", border: "1px solid black"
    }
    return (
        <div className="char">
            <input type="text" style={inputStyle} value={props.character} onClick={props.removeChar} />
        </div>
    )
}

export default char;