import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" onClick={() => paginate(1)} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {pageNumbers.map(number => (
                            <li key={number} className='page-item'>
                                <button className="page-link" onClick={() => paginate(number)}> {number}</button>
                            </li>
                        ))}
                        <li className="page-item">
                            <button className="page-link" onClick={() => paginate(pageNumbers.length)} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </ul>
        </nav>
    );
};

export default Pagination;