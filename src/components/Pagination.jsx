import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
  const { meta } = useLoaderData();
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNum) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNum)
    navigate(`${pathname}?${searchParams.toString()}`)
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <button
        className="btn btn-xs sm:btn-md join-item"
        onClick={() => {
          let prevPage = page - 1;
          if(prevPage < 1) prevPage = pageCount;
          handlePageChange(prevPage)}
          }>
        Prev
      </button>
      {pages.map((pageNum) => {
        return <button className={`btn btn-xs sm:btn-md border-none join-item ${pageNum === page ? 'bg-base-300 border-base-300' :''}`} key={pageNum} onClick={() => handlePageChange(pageNum)}>{pageNum}</button>
      })}
      <button
        className="btn btn-xs sm:btn-md join-item"
        onClick={() => {
          let nextPage = page + 1;
          if(nextPage > pageCount) nextPage = 1;
          handlePageChange(nextPage)
          }}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
