import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=4")
  const seasonIni = await getAnimeResponse("seasons/now", "limit=4")

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/Populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title="Anime Season Ini"
          linkTitle="Lihat Semua"
          linkHref="/Ongoing"
        />
        <AnimeList api={seasonIni} />
      </section>
    </>
  );
};

export default Page;
