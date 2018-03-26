import React from 'react';
import { Link } from "react-router-dom";
import NameInfo from './NameInfo.js';
import AddressInfo from './AddressInfo.js';
import CompanyInfo from './CompanyInfo.js';
import authorList from '../../services/authorService.js'

class Author extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            allAuthors: [],
            singleAuthor: {}
        }
    }

    componentDidMount(){
        let thisId = this.props.match.params.id;
        
        authorList.fetchAuthors()
            .then((authorsData) => {
                this.setState({
                    allAuthors: authorsData,
                })
                this.setState({
                    singleAuthor: this.state.allAuthors[thisId - 1]
                })
            }) 
    }

    
    render(){
        return (
            <div className="container">
                <p style={{ margin: '10px' }}><Link to='/authors'>All Authors</Link></p>
                <h4>Single Author</h4>
                <NameInfo value={this.state.singleAuthor}/>
                <AddressInfo value={this.state.singleAuthor}/>
                <CompanyInfo value={this.state.singleAuthor}/>
            </div>
        )
    }
}

export default Author;