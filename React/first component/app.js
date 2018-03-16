

const ShoppingList = (props) => {
    return (
        <ul>
            {props.names.map(item => <li>{item}</li>)}
        </ul>
    )
}

const App = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ShoppingList names={props.numbers}/>
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App title={'Number list'} numbers={['one', 'two', 'three']}/>, root);