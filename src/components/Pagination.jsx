import React from "react";

export const Pagination = ({productsPerPage, totalProducts, currentPage, setCurrentPage}) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalProducts/ productsPerPage); i++){
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n)=>{
        setCurrentPage(n)
    }

    

    return (
        <nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
            <a href="#" className={`pagination-previous ${currentPage === 1 ? 'is-disable' : '' }`} onClick={onPreviusPage}>Previous</a>
            <a href="#" className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disable' : '' }`} onClick={onNextPage} >Next page</a>
            <ul className="pagination-list">
                {pageNumbers.map(noPage =>(
                    <li key={noPage}><a href="#" className={`pagination-link ${noPage === currentPage? 'is-current' : {noPage}}`} onClick={()=> onSpecificPage(noPage)}>{noPage}
                    </a></li>

                ))}
                <li>
                <a
                    className="pagination-link is-current"
                    aria-label="Page 46"
                    aria-current="page"
                    >46</a>
                </li>
            </ul>
</nav>
    
    )
}