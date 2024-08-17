const Search = () => {
    return (
      <>
        <div className="flex items-center justify-center">
          <>
            <div className="flex h-6">
              <div className="flex w-7 items-center justify-center rounded-tl-md rounded-bl-md border-r border-gray-200 bg-white text-black">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-4 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full max-w-[130px] bg-white text-black pl-2 text-base outline-0"
                placeholder=""
                id=""
              />
              <button className="border-none hover:bg-gradient-to-l
        hover:from-red-500 
        hover:via-red-800 
        hover:to-red-900 
        hover:bg-red-900/85
        bg-gradient-to-l
         from-green-700 via-green-800 to-green-900 bg-green-900/85 px-2  rounded-tr-md rounded-br-md text-white   transition-colors  font-semibold">
                Search
              </button>
            </div>
          </>
        </div>
      </>
    );
  };
  
  export default Search;