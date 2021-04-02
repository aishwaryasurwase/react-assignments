import './UserOutput.css'
const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Welcome to the React Course</p>
            <p>Author - {props.name}</p>
        </div>
    )
}
export default userOutput; 