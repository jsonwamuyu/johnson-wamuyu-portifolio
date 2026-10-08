let authors = [
  { id: "1", fullname: "John Smith" },
  { id: "2", fullname: "Henry Ford" },
  { id: "3", fullname: "Mike Sammy" },
];

let games = [
  { id: "1", title: "Dream League 2025", platform: ["Mobile phone", "PC"] },
  { id: "2", title: "FIFA", platform: ["XBox", "PC"] },
];

let reviews = [
  {
    id: "1",
    content: "This game is awesome",
    ratings: 3,
    game_id: "2",
    author_id: "1",
  },
  {
    id: "1",
    content: "I enjoy playing it",
    ratings: 4,
    game_id: "2",
    author_id: "3",
  },
  {
    id: "1",
    content: "This game is awesome",
    ratings: 5,
    game_id: "1",
    author_id: "2",
  },
];

export { authors, games, reviews };
