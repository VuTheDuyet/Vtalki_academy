import React from 'react';
import './Pagination.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={currentPage === page ? 'active' : ''}
                >
                    {page}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                &gt;
            </button>
        </div>
    );
};

export default Pagination;