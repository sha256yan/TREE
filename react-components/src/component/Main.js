import "./Main.css"

export default function Main(props) {
    const url = require(`.../public/images/${props.backgroundImg}`)
    return (
        <div 
            style={{ 
                width: "100%",
                height: "100%",
                color: "#ffffff",
                backgroundImage: `url(${url})` 
            }}
            classname="main--comp"
        >
            <h1 classname="main--title" >{props.title}</h1>
            <p classname="main--content">{props.content}</p>
        </div>
    )
}