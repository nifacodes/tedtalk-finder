import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
    state = {
        query: ''
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.query === '') {
            this.props.setAlert("Please enter something", "danger");

        } else {

            this.props.searchTalk(this.state.query)
        }
    }
    clearSearchResults = () => {
        this.setState({ query: '' });
        this.props.clearResults();
    }
    render() {
        return (
            <Form className="ml-auto search-size" onSubmit={this.onSubmit} >
                <FormControl type="text" name='query' placeholder="Search" className="auto" style={{ backgroundColor: '#faf0dc' }} value={this.state.query} onChange={this.onChange} />
                {this.state.query.length > 0 && <Button className="form-search-btn" onClick={this.clearSearchResults}>
                    <i className="fas fa-times icon" />
                </Button>}
                {/* <LinkContainer to="/tedtalks"> */}
                <Button className="form-search-btn" type="submit">
                    <i className="fas fa-search icon" />
                </Button>
                {/* </LinkContainer> */}
            </Form>

        );
    }

}

export default Search;

