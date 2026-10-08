let games = [
  { id: "1", title: "Footbal Game", platform: ["Xbox", "FIFA"] },
  { id: "2", title: "Horse Racing", platform: ["Super Bowl", "Super Star"] },
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

let projects = [
  {
    id: "1",
    title: "Popo landing page",
    source_code: "github.com/popo",
    live_link: "popo.com",
    owner_id: "1",
  },
  {
    id: "2",
    title: "Young Money",
    source_code: "github.com/youngmoney",
    live_link: "youngmoney.com",
    owner_id: "2",
  },
  {
    id: "3",
    title: "TikTok Clone",
    source_code: "github.com/tiktok-clone",
    live_link: "tiktok-clone.com",
    owner_id: "3",
  },
];

let owners = [
  { id: "1", fullname: "John Doe" },
  { id: "2", fullname: "Jane doe" },
  {
    id: "3",
    fullname: "Johnson Muchiri",
  },
];

let authors = [
  { id: "1", fullname: "James kimbo", verified: true },
  { id: "2", fullname: "John Doe", verified: false },
  ,
  {
    id: "3",
    fullname: "Ngugi Thiongo",
    verified: true,
  },
  {
    id: "4",
    fullname: "Tom Cook",
    verified: true,
  },
];

let books = [
  { id: "1", title: "The Harry Potter", author_id: "1" },
  { id: "2", title: "The River Between", author_id: "3" },
  { id: "3", title: "The Condour", author_id: "2" },
  { id: "4", title: "The Day of the Jackle", author_id: "4" },
  { id: "5", title: "Whip Not Child", author_id: "3" },
];

export { games, authors, reviews, projects, owners, books };
