interface Movie {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export default async function ServerSide() {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const data: Movie[] = await response.json();
  console.table(data);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Movies
      </h1>
      <div className="flex flex-wrap justify-start">
        {data.map((movie) => (
          <div
            key={movie.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
          >
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold">{movie.name}</h2>
              <p>Type: {movie.type}</p>
              <p>Available: {movie.available ? "Yes" : "No"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
