import React, { useState, useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
//internal
import TedTalkContext from '../../context/tedtalk/tedTalkContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const tedtalkContext = useContext(TedTalkContext)
    const alertContext = useContext(AlertContext)

    const [query, setQuery] = useState('');

    const onChange = (e) => setQuery(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault();
        if (query === '') {
            alertContext.setAlert("Please enter something!", "danger");

        } else {
            tedtalkContext.searchTalk(query)
        }
    }

    const clearSearchResults = () => {
        setQuery('');
        tedtalkContext.clearResults();
    }

    return (
        <Form className="ml-auto search-size" onSubmit={onSubmit} >
            <FormControl type="text" name='query' placeholder="Search" className="auto" style={{ backgroundColor: '#faf0dc' }} value={query} onChange={onChange} />
            {query.length > 0 && <Button className="form-search-btn" onClick={clearSearchResults}>
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


export default Search;

