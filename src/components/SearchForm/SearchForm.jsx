import { useState } from "react";
import s from './SearchForm.module.css'

export default function SearchForm({onSubmit}){
    const [query, setQuery] = useState('');

    const handelSearchChange = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    };

    const handelSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            alert('🦄 Boolshit!');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <div className={s.searchbar}>
            <form
                className={s.searchForm}
                onSubmit={handelSubmit} >
                    <button type="submit" className={s.button}>
                        <span className={s.buttonLabel}>Search</span>
                    </button>
                <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search..."
                    name="search"
                    value={query}
                    onChange={handelSearchChange}
                />
            </form>
        </div>
    ); 
};

