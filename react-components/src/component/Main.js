import "./Main.css"


function Main(props) {
    return (
        <div className="main--comp">
            <h1 className="main--title" >{props.title}</h1>
            <p className="main--content">{props.content}</p>
        </div>
    )
}

export default Main;