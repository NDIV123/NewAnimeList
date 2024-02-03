import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <div className="h-full">
      <div className="my-4">
        <h3 className="text-5xl text-color-primary mt-4 mx-4">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary sm:justify-between overflow-x-hidden">
        <div className="flex flex-col justify-center items-center p-2 w-full border border-color-primary rounded">
          <h3>Peringkat </h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full border border-color-primary rounded">
          <h3>Skor </h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="flex flex-col justify-center w-full items-center border border-color-primary rounded">
          <h3>ANGGOTA </h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full border border-color-primary rounded">
          <h3>EPISODE </h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 sm:flex-nowrap flex-wrap flex gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={200}
          height={200}
          className="w-full rounded object-fill"
        />
        <div className="mx-4 flex flex-col gap-4">
          <h3 className="text-3xl">Sinopsis</h3>
          <p className="text-justify px-4">{anime.data.synopsis}</p>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Page;
