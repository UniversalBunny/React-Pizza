import React from "react";
import axios from "axios";
import qs from 'qs';

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { PizzaSkeleton } from "../components/PizzaBlock/PizzaSkeleton";
import { Paginate } from "../components/Pagination/Paginate";
import { SearchContext } from "../App";


export function Home() {
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortType = useSelector((state) => state.filter.sortType);
    const currentPage = useSelector((state) => state.filter.currentPage);

    //useState
    const[data, setData] = React.useState([]); // данные(пиццы) из API
    const[loading,  setLoading] = React.useState(true); // для отображения Skeleton
    
    const {searchValue} = React.useContext(SearchContext); 

    //переменные для FETCH запроса
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-','');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    // AXIOS
    React.useEffect(() => {
        setLoading(true);
        axios.get(`https://679dc653946b0e23c061c2bd.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(`Что-то не так ${error.status}`);
        })
        window.scrollTo(0,0);
      }, [categoryId, sortType, searchValue, currentPage]) // зависимости, изменение которых, приводят к перерисовки приложения

   
    return(
        <div className="container">
            <div className="content__top">
              <Categories value={categoryId} onClickCategory={(i) => dispatch(setCategoryId(i))}/>
              <Sort />
            </div>
              <h2 className="content__title">Все пиццы</h2>
              <div className="content__items">
                {loading 
                ? [...new Array(6)].map((_, index) => {return <PizzaSkeleton key={index}/>}) 
                : data.map(pizza => {return <PizzaBlock key={pizza.id}{...pizza}/>})
                }
              </div>
              <Paginate onChangePage={(n) => dispatch(setCurrentPage(n))}/>
        </div>       
    )
}