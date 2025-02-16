import React from "react";

export function Categories(props){
 
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острая','Закрытая',]
  const categoriesList = categories.map((category, i) => {
    return <li key={i} onClick={() => props.onClickCategory(i)} className={props.value === i ? 'active' : ''}>{category}</li>
  })
    return(
        <div className="categories">
              <ul>
                {categoriesList}
              </ul>
        </div>
    )
}