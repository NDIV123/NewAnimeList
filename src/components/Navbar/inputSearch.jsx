"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const inputSearch = () => {

  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (e) => {
    const keyword = searchRef.current.value
    if (!keyword) return
    if (e.key === "Enter" || e.type === "click"){
      e.preventDefault()
      router.push(`/Search/${keyword}`)
    }
  }
  
  return (
    <div className="relative">
      <input
        placeholder="cari anime..."
        className="text-black w-full p-2 rounded"
        onKeyUp={handleSearch}
        ref={searchRef}
      />
      <button className="absolute top-2 end-3 z-50" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default inputSearch;
