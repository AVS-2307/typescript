import Movie from '../domain/Movie';

test('adding item to cart', () => {
  const film = new Movie(100, 'Мстители', 'The Avengers', 2012, 'USA', '"Avengers Assemble!"', ['фантастика', 'боевик', 'фэнтези', 'приключения', '...'], '137 мин. / 02:17', 150);
 
  expect(film).toEqual({
    id: 100, 
    name: 'Мстители', 
    nameOrigin: 'The Avengers', 
    year: 2012, 
    country: 'USA', 
    slogan: '"Avengers Assemble!"', 
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения', '...'], 
    duration: '137 мин. / 02:17', 
    price: 150})
})