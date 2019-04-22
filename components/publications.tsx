import React, { useState, ChangeEvent, MouseEvent } from 'react';
import PublicationsAPI from './API/Publications.json';
import { ScrollToTop, sortArrayOfObjects } from './utils';

const Publications = () => {
    ScrollToTop();

    const [filteredPublicationsState, SetfilteredPublicationsState] = useState(PublicationsAPI);
    const textFilterInputRef = React.createRef<HTMLInputElement>();
    const yearFilterInputRef = React.createRef<HTMLSelectElement>();
    const typeFilterInputRef = React.createRef<HTMLSelectElement>();

    const getSearchBox = () => {
        return (
            <div className="-publications-search-box-wrapper">
                <form className="-publications-search-box">
                    <input ref={textFilterInputRef} className="-publications-search-input" type="text" name="text" placeholder="Search in publications" onChange={applyFilter} />
                    <select ref={yearFilterInputRef} className="-publications-search-dropdown" name="year" onChange={applyFilter}>
                        {getDropdown('year')}
                    </select>
                    <select ref={typeFilterInputRef} className="-publications-search-dropdown" name="type" onChange={applyFilter}>
                        {getDropdown('type')}
                    </select>
                    <button className="-publications-search-button" onClick={clearFilters}>Clear</button>
                </form>
            </div>
        );
    }

    const getDropdown = (whichFilter: 'year' | 'type') => {
        // @ ts-ignore
        let arr: any[] = PublicationsAPI.map(item => item[whichFilter]);
        arr = getUniqueAndSorted(arr);
        whichFilter === 'year' ? arr.unshift('All years') : null;
        whichFilter === 'type' ? arr.unshift('All types') : null;
        return arr.map((item, index) => <option key={index}>{item}</option>);
    }

    const getUniqueAndSorted = (arr: any[]): any[] => {
        if (arr.length === 0) {
            return null;
        }

        arr = arr.reduce((cum, current) => {
            if (!cum.includes(current)) {
                cum.push(current);
            }
            return cum;
        }, []);

        return (isNaN(arr[0]) ? arr.sort() : arr.sort((a: number, b: number) => b - a));
    }

    const applyFilter = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const text = textFilterInputRef.current.value;
        const year = yearFilterInputRef.current.value;
        const type = typeFilterInputRef.current.value;

        const newFilteredResults = PublicationsAPI.filter(item => (item.title.toLowerCase().includes(text.toLowerCase())))
            .filter(item => (year === 'All years' ? true : item.year === year))
            .filter(item => (type === 'All types' ? true : item.type === type));

        SetfilteredPublicationsState(newFilteredResults);
    }

    const clearFilters = (e: MouseEvent) => {
        e.preventDefault();
        textFilterInputRef.current.value = '';
        yearFilterInputRef.current.value = 'All years';
        typeFilterInputRef.current.value = 'All types';
        SetfilteredPublicationsState(PublicationsAPI);
    }

    const getPublications = () => {
        return sortArrayOfObjects(filteredPublicationsState, 'year', 'decending').map(item => {
            let { id, year, _, containerTitle, authors, volume, page, doi, __, title } = item;
            let link = 'https://dx.doi.org/' + doi;

            return (
                <a className="-publications-item" href={link} target="_blank" key={id}>
                    <p className="-publications-title">
                        {title}
                    </p>
                    <p className="-publications-authors">
                        {getAuthors(authors)}
                    </p>
                    <p className="-publications-address">
                        <span className="-publications-journal">{containerTitle}</span>,
                        <span className="-publications-year"> {year}</span>,
                        <span className="-publications-volume">{volume}</span>,
                        <span className="-publications-page"> {page}</span>
                    </p>
                </a>
            );
        });
    }

    const getAuthors = (authors: any[]) => {
        return (authors.map((author: any, index: number) => {
            if (author.firstName || author.lastName) {
                let delimiter = (index < (authors.length - 1) ? ', ' : '');
                return author.firstName + ' ' + author.lastName + delimiter;
            }
            return null;
        })
        );
    }

    return (
        <div className="-publications-wrapper  container">
            {getSearchBox()}
            {getPublications()}
        </div>
    );
}

export default Publications;