import React, { useState, useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
//internal
import TedTalkContext from '../../context/tedtalk/tedTalkContext';

const Search = ({ setAlert }) => {
    const tedtalkContext = useContext(TedTalkContext)
    const [query, setQuery] = useState('');

    const onChange = (e) => setQuery(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault();
        if (query === '') {
            setAlert("Please enter something", "danger");

        } else {
            console.log("first time using context!")
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

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default Search;

