const Blog = (props) => {
    return (
        <div>
            <h1>{props.value.title}</h1>
            <p>{props.value.body}</p>
        </div>
    )
}

const App = (props) => {
    return (
        <div>   
           { props.value.map(el => <Blog value={el} key={el.id}/>) }

        </div>
    )
}


const root = document.getElementById('root');
ReactDOM.render(<App value={postsData} />, root);