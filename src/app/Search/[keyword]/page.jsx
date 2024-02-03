import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({ params }) => {

  const { keyword } = params;
  
  const decodeKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)

  return (
    <>
      <section>
        <Header
          title={`pencarian untuk ${decodeKeyword}...`}
          linkHref="/populer"
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
