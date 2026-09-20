export const data = [
  {
    id: "1",
    author: "bob",
    text: "Great post!",
    timestamp: Date.now() - 3600000,
    upvotes: 12,
    replies: [
      {
        id: "2",
        author: "alice",
        text: "Thanks Bob!",
        timestamp: Date.now() - 1800000,
        upvotes: 3,
        replies: [
          {
            id: "3",
            author: "carol",
            text: "Agreed.",
            timestamp: Date.now() - 900000,
            upvotes: 1,
            replies: [],
          },
        ],
      },
      {
        id: "4",
        author: "dave",
        text: "Strong take.",
        timestamp: Date.now() - 600000,
        upvotes: 5,
        replies: [],
      },
    ],
  },
  {
    id: "5",
    author: "eve",
    text: "Disagree, here is why...",
    timestamp: Date.now() - 7200000,
    upvotes: 8,
    replies: [],
  },
];
