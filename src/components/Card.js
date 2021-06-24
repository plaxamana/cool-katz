const Card = ({name, email, id, phone}) => {
  return (
    <div className="bg-blue-200 rounded-lg shadow-lg w-60 p-4 m-4 transform cursor-pointer duration-300 hover:scale-105">
      <img
        src={`https://robohash.org/${id}?size=200x200&set=set4`}
        alt={name}
      />
      <div>
        <h2 className="text-2xl font-bold mt-2">{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
}

export default Card;