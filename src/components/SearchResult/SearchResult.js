import { Link } from "react-router-dom";
import config from "~/config";
import Images from "../Images/Images";
import RateFilm from "../RateFilm/RateFilm";

function SearchResult({ data }) {
  return (
    <div className="mt-[32px] w-full">
      <h3 className="text-textPrimary text-[20px] font-[600]">
        Phim đã tham gia
      </h3>
      <div className="flex relative w-full flex-wrap">
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/movie/${item.id}`}
              className="max-w-[25%] w-[25%] flex flex-col items-center mt-6 overflow-hidden relative hover:scale-105 hover:brightness-110 transition duration-300"
            >
              <Images
                fallBack={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADJCAMAAAA93N8MAAAAYFBMVEXu7u7x8fHt7e3y8fHt7u3w7u+5s7fNyMvy8vLv8fDd29zq6urg4OC2sbTd3d3SztLAu7+2sLXEwsXX09Tm5OXAvL3Uz9PGxsbMy87U1NbNx8vBv8C4tbbY1dfa1drk3+MIg7+VAAADLElEQVR4nO3W7XKjOBCFYTVCfEiCgJBtEuP4/u9yWtjJJru1MzW/dth6n1QcjBQnhxZqjAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+T+rnd7W/q76d/3JQf76vzN9mfputA7U5DGetLVHEWinvRXrrvg/K/lrYMlRiu88p0htxVtM766yUw6Nwy2l60cz5Mk1rMGLW5XVdHsFcOZnGsJ5O635Z8jS9Rf1Zu+uz7Dbo/PTWZhfTlG6vy/UU3L/9rT+Ms7lp7hpM2ps4iVvU6r/u/78uXds2ztTSnraga96u07Tn6v3gxZQRv2Ur7jxk/aQm6erIWzDHWfNpaoJGX3zvwlZWQG3TI6LpS3TTv9y2m+iSbp/n+8uUXFn0edZLoAOn3BvbpK4y/XKYqmu1Um6SqzS62KWUTy+Dn8d97CP6/XoVLbF/Rg/ruSkTRd+XEtuXqMunSeLyeJx7vUSX92GxpermutVlG6vzvErZqz+i52XLtVxcmso9LkvO81kPghZ6X92Vni5Vdxf9kONwyUk7++7spXrey0bXgdTur+gxNGfJa/eouruYfj/KTVumVU5p9Ol2bt7/2zC/x5XbVvexd2++RL9IKedndJuabon9Y4FHrfp58I/oessv05C8iFbd+ptU1c//3p9Eo0tu3jS6Vj/sp+K8mK9Vv8ttju1e67qS1cfRT5paL1WZbe9zLlVPGrv0x8NwSR/W3G2YNPretLRnvZRd7Bm9rjV6H5rTIhpd9/Owdka6t6HS7W3LusP397I7dvtNUpv1OFV3U9mUbZq9Zl5PpcUH7WVlSGSvun3Rzb/VDtilk85ZyuUxcVt6vVGuTpd8HmJfd9u101+5nw7S3EoN57Y0qqop/cy+ppj9dXzs01WeBu3TfppG4y9S5W3zwQ/61FdXftjGSlv91Yd4aUMd/LbFEOL06HcHINHfx72J51CeziXEMX7ULYz3OGZ9vfvgQh981MHypbPHGL22QQmjj5V9nBi9yvVBov+SfHsu/WfX/hg9yDIHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAft8PqZAjMxtBCQYAAAAASUVORK5CYII="
                }
                className="w-[180px] h-[270px] rounded-xl"
                src={`${config.api.IMG_API}${item.poster_path}`}
                alt=""
              />
              <p className="text-center font-semibold text-lg text-textPrimary text-ellipsis  line-clamp-2">
                {item.title}
              </p>
              <RateFilm data={item.vote_average} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
