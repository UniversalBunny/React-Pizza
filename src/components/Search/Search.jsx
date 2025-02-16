import React from 'react';
import debounce from 'lodash.debounce'

import styles from '../Search/Search.module.scss'

import cleanIcon from '../../assets/img/clean-icon.svg'
import { SearchContext } from '../../App';

export function Search() {
    const [value, setValue] = React.useState('');
    const {searchValue, setSearchValue} = React.useContext(SearchContext);

    const updateSearchValue = React.useCallback(debounce((val) => {
        setSearchValue(val)}, 500),[]);
    
    const onClickClear = () => {
        setSearchValue('');
        setValue('');
    }


    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }; 

    return (
        <div className={styles.main}>
            <input
            value={value} 
            onChange={onChangeInput} 
            className={styles.input} 
            placeholder='Поиск пиццы...' 
            />
            { searchValue && <img 
            onClick={() => {onClickClear()}} 
            className={styles.clean} 
            src={cleanIcon} 
            />
            }
        </div>
    )
}