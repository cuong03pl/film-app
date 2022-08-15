import Tippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import { search } from "~/apiServices/searchServices";
import { ClearIcon, SearchIcon } from "~/components/Icon/Icon";
import SearchResult from "~/components/SearchResult/SearchResult";
import Wrapper from "~/components/Wrapper/Wrapper";
import { useDebounce } from "~/hooks/useDebounce";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [resultValue, setResultValue] = useState([]);
  const [show, setShow] = useState(false);
  const input = useRef();
  const debounced = useDebounce(searchValue, 1000);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await search(debounced);
      setResultValue(res);
      setShow(true);
    };
    fetchApi(debounced);
  }, [debounced]);
  useEffect(() => {
    if (searchValue === "") {
      setShow(false);
    }
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue("");
    input.current.focus();
    setResultValue([]);
    setShow(false);
  };
  return (
    <Tippy
      interactive
      visible={show && resultValue.length > 0}
      render={(attrs) => (
        <div className="w-[400px]" tabIndex="-1" {...attrs}>
          <Wrapper>
            <div className="py-2">
              <SearchResult data={resultValue} title={"Movies"} />
            </div>
          </Wrapper>
        </div>
      )}
    >
      <div className="h-[50px] w-[400px] border-[1.5px] border-transparent border-solid flex items-center bg-[#1618230f] py-3 px-4 pr-0 rounded-[92px] focus-within:border-[1.5px] focus-within:border-[#16182333] focus-within:border-solid ">
        <input
          ref={input}
          className=" flex items-center text-base w-[300px] h-full outline-none bg-transparent "
          placeholder="Tìm theo tên"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <span onClick={handleClear} className="px-2 cursor-pointer">
          <ClearIcon className={"h-4 w-4"} />
        </span>
        <div className="w-[1px] bg-[#1618231f] h-full"></div>
        <button className="flex items-center justify-center h-[46px] w-[52px] hover:bg-[#16182308] rounded-r-[92px]">
          <SearchIcon className={"h-[20px] w-[20px]"} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
