function NewCard({ imageUrl, title }) {
    console.log(imageUrl)
    return (
      <>
        <div className="card bg-white w-[200px] h-[250px] m-2 rounded-lg shadow-lg">
          <div className="">
            <img
              className="w-[200px] h-[200px] object-cover  p-2"
              src={imageUrl} alt="img"
            />
          </div>
  
          <div className="justify-center items-start p-3 font-semibold text-center">
            {title}
          </div>
        </div>
      </>
    );
  }
  export default NewCard;
  