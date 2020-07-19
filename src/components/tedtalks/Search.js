import React, { useState, useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//internal
import TedTalkContext from '../../context/tedtalk/tedTalkContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const tedtalkContext = useContext(TedTalkContext)
    const alertContext = useContext(AlertContext)

    const [query, setQuery] = useState('');

    const onChange = (e) => setQuery(e.target.value)
    const searchTalk = (e) => {
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
        <Form className="ml-auto search-size" onSubmit={(e) => e.preventDefault()}>
            <FormControl type="text" name='query' placeholder="Search" className="auto" style={{ backgroundColor: '#faf0dc' }} value={query} onChange={onChange} />
            {query.length > 0 && (
                <Link to="/" onClick={clearSearchResults}>
                    <Button className="form-search-btn">
                        <i className="fas fa-times icon" />
                    </Button>
                </Link>
            )}
            <Link to={`/${query}`} onClick={(e) => searchTalk()}>
                <Button className="form-search-btn" >
                    <i className="fas fa-search icon" />
                </Button>
            </Link>
        </Form>

    );
}


export default Search;

////////////////////
// import React, { useState, useContext } from 'react';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { LinkContainer } from "react-router-bootstrap";

// //internal
// import TedTalkContext from '../../context/tedtalk/tedTalkContext';
// import AlertContext from '../../context/alert/alertContext';

// const Search = () => {
//     const tedtalkContext = useContext(TedTalkContext)
//     const alertContext = useContext(AlertContext)

//     const [query, setQuery] = useState('');

//     const onChange = (e) => setQuery(e.target.value)
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     if (query === '') {
//     //         alertContext.setAlert("Please enter something!", "danger");
//     //     } else {
//     //         tedtalkContext.searchTalk(query)
//     //     }
//     // }

//     const clearSearchResults = () => {
//         setQuery('');
//         tedtalkContext.clearResults();
//     }

//     return (
//         <Form className="ml-auto search-size" onSubmit={(e) => e.preventDefault()}>
//             <FormControl type="text" name='query' placeholder="Search" className="auto" style={{ backgroundColor: '#faf0dc' }} value={query} onChange={onChange} />
//             {query.length > 0 && <Button className="form-search-btn" onClick={clearSearchResults}>
//                 <i className="fas fa-times icon" />
//             </Button>}
//             <LinkContainer to="/">
//                 <Button className="form-search-btn" onClick={() => tedtalkContext.searchTalk(query)}>
//                     <i className="fas fa-search icon" />
//                 </Button>
//             </LinkContainer>
//         </Form>

//     );
// }


// export default Search;

// import React, { useState, useContext } from 'react';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { LinkContainer } from "react-router-bootstrap";

// //internal
// import TedTalkContext from '../../context/tedtalk/tedTalkContext';
// import AlertContext from '../../context/alert/alertContext';

// const Search = () => {
//     const tedtalkContext = useContext(TedTalkContext)
//     const alertContext = useContext(AlertContext)

//     const [query, setQuery] = useState('');

//     const onChange = (e) => setQuery(e.target.value)
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (query === '') {
//             alertContext.setAlert("Please enter something!", "danger");
//         } else {
//             tedtalkContext.searchTalk(query)
//         }
//     }

//     const clearSearchResults = () => {
//         setQuery('');
//         tedtalkContext.clearResults();
//     }

//     return (
//         <Form className="ml-auto search-size" onSubmit={(e) => e.preventDefault()}>
//             <FormControl type="text" name='query' placeholder="Search" className="auto" style={{ backgroundColor: '#faf0dc' }} value={query} onChange={onChange} />
//             <Link to="/">
//                 {query.length > 0 && <Button className="form-search-btn" onClick={clearSearchResults}>
//                     <i className="fas fa-times icon" />
//                 </Button>}
//             </Link>
//             <Link to="/">
//                 <Button className="form-search-btn" onClick={() => tedtalkContext.searchTalk(query)}>
//                     <i className="fas fa-search icon" />
//                 </Button>
//             </Link>
//         </Form>

//     );
// }


// export default Search;

////////////////////
// import React, { useState, useContext } from 'react';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { LinkContainer } from "react-router-bootstrap";

// //internal
// import TedTalkContext from '../../context/tedtalk/tedTalkContext';
// import AlertContext from '../../context/alert/alertContext';

// const Search = () => {
//     const tedtalkContext = useContext(TedTalkContext)
//     const alertContext = useContext(AlertContext)

//     const [query, setQuery] = useState('');

//     const onChange = (e) => setQuery(e.target.value)
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     if (query === '') {
//     //         alertContext.setAlert("Please enter something!", "danger");
//     //     } else {
//     //         tedtalkContext.searchTalk(query)
//     //     }
//     // }

//     const clearSearchResults = () => {
//         setQuery('');
//         tedtalkContext.clearResults();
//     }

//     return (
//         <Form className="ml-auto search-size" onSubmit={(e) => e.preventDefault()}>
//             <FormControl type="text" name='query' placeholder="Search" className="auto" style={{ backgroundColor: '#faf0dc' }} value={query} onChange={onChange} />
//             {query.length > 0 && <Button className="form-search-btn" onClick={clearSearchResults}>
//                 <i className="fas fa-times icon" />
//             </Button>}
//             <LinkContainer to="/">
//                 <Button className="form-search-btn" onClick={() => tedtalkContext.searchTalk(query)}>
//                     <i className="fas fa-search icon" />
//                 </Button>
//             </LinkContainer>
//         </Form>

//     );
// }


// export default Search;

