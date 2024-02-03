const Pagination = ({ page, lastPage, setPage }) => {
  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevState) => prevState + 1);
      scrollTop();
    }
    if (page == lastPage) lastPage = "end"
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };

  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
      { page <= 1 ? null : 
      <button
      className="transition-all hover:text-color-accent"
      onClick={handlePrevPage}
      >
        Prev
      </button>
      }
      <p>
        {page} of {lastPage}
      </p>

      { page < lastPage ?       <button
        className="transition-all hover:text-color-accent"
        onClick={handleNextPage}
      >
        Next
      </button> : null}

    </div>
  );
};

export default Pagination;
