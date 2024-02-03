"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../libs/api-libs";

const Page = () => {
  const [seasonIni, setSeasonIni] = useState([])

  const fetchData = async () => {
    const animeSeasonIni = await getAnimeResponse("seasons/now")
    setSeasonIni(animeSeasonIni)
  };
  
  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <HeaderMenu title={"Anime Season Ini"}/>
      <AnimeList api={seasonIni} />
    </>
  );
};

export default Page;
