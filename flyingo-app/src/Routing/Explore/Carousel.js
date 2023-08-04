import NewCard from "./NewCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import locations from "./card";
import { Link} from "react-router-dom";

function Carousel() {
  const scrollLeft = () => {
    const carouselElement = document.getElementById("carousel");
    carouselElement.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const carouselElement = document.getElementById("carousel");
    carouselElement.scrollLeft += 300;
  };

  return (
    <div className="w-full">
      
      <div className="text-center py-4 text-xl font-bold">Trending International Destinations</div>

      <div className="grid grid-rows-1 w-3/4 mx-auto bg-fuchsia-950">0
        <div className="flex justify-end">
          <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-yellow-600"><FiChevronLeft /></button>
          <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-yellow-600"><FiChevronRight /></button>
        </div>

        <div id="carousel" className="p-4 flex items-center justify-start overflow-hidden">
          {locations.map((location) => (
            <div key={location.id}>
              <Link to={`/destination/${location.id}`}>
                <NewCard imageUrl={location.image} title={location.title} id={location.id}/>
              </Link>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
}

export default Carousel;
