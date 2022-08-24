import Banner from "~/components/Banner/Banner";
import MovieList from "~/components/MovieList/MovieList";

function Home() {
  return (
    <div className="w-full mx-8 pb-6 mt-6">
      <div className="w-full relative h-[400px] ">
        <Banner />
      </div>
      <div className="relative h-[400px] mt-7">
        <MovieList path={"now_playing"} title={"Now Playing"} />
      </div>
      <div className="relative h-[400px] mt-7">
        <MovieList path={"top_rated"} title={"Top Rated"} />
      </div>
      <div className="relative h-[400px] mt-7">
        <MovieList path={"upcoming"} title={"Up Coming"} />
      </div>
    </div>
  );
}

export default Home;
