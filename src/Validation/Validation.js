const validation = (props) => {
    let message = 'Text too short';
    if (props.lengthOfText >= 5) {
        message = 'Text long enough';
    }
    return (
        <div>
            {/* <p>Length of text is : {props.lengthOfText}</p>
            {
                props.lengthOfText < 5 ? 'Text too short' : 'Text long enough'
            } */}
            {message}
        </div>
    )
}
export default validation;