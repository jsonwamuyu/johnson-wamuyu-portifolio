let games = [
  { id: "1", title: "Footbal Game", platform: ["Xbox", "FIFA"] },
  { id: "2", title: "Horse Racing", platform: ["Super Bowl", "Super Star"] },
];

let authors = [
  { id: "1", fullname: "James kimbo", verified: true },
  { id: "2", fullname: "John Doe", verified: false },
];

let reviews = [
  {
    id: "1",
    ratings: 5,
    content: "This is realy good and awesome",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    ratings: 8,
    content: "Highly recommend",
    author_id: "2",
    game_id: "2",
  },
];
export { games, authors, reviews };
