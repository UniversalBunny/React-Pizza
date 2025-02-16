import ReactPaginate from "react-paginate";

import styles from '../Pagination/Paginate.module.scss'

export function Paginate({onChangePage}){
    return(
        <ReactPaginate
        className={styles.main}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    )
}