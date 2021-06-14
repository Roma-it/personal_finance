import "./container.css"


function container(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default container
