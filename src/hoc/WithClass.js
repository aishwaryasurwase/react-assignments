// const withClass = (props) => (
//     <div className={props.classes}>{props.children}</div>
// )
// export default withClass;
const withClass = (WrappedComponent, classes) => {
    return props => (
        <div className={classes}>
            <WrappedComponent {...props}/>
        </div>
    )
}
export default withClass; 