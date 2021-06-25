import Card from "./Card";

const CardList = ({ cats, isLoading }) => {

  return (
    isLoading ? <h3 className="text-6xl font-bold">Loading...</h3> :
    <div className="flex flex-wrap justify-center">
      {cats.map((cat) => (
        <Card
          key={cat.id}
          name={cat.name}
          email={cat.email}
          id={cat.id}
          phone={cat.phone}
        />
      ))}
    </div>
  );
};

export default CardList;
