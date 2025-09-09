'use client';

import React from "react";
import { PaginationContainer, PageButton } from "./PaginationStyle";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);


    const handlePageChange = (page: number) => {
        onPageChange(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <PaginationContainer>
            <PageButton
                $active={false}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {"<"}
            </PageButton>

            {pages.map((page) => (
                <PageButton
                    key={page}
                    $active={page === currentPage}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </PageButton>
            ))}

            <PageButton
                $active={false}
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                {">"}
            </PageButton>
        </PaginationContainer>
    );
}
