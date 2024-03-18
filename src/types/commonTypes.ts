export type User = {
  id: number;
  username: string;
  email: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
};
