
// functional component
const NumberList = (props) => {  // object properties
    return (
        // JSX = React.createElement
        <ul>
            {props.names.map(item => <li>{item}</li>)}
        </ul>
    )
}

const App = (props) => {
    return (
        <div>  
            <h1>{props.title}</h1>
            <NumberList names={props.numbers}/>  
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App title={'Number list'} numbers={['one', 'two', 'three']}/>, root);