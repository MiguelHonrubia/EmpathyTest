export type ArtistType = {
  total: number;
  items: ArtistDetailType[];
  href: string;
  previous: string;
  next: string;
  offset: number;
  limit: number;
};

export type ArtistDetailType = {
  id: string;
  name: string;
  popularity: number;
  images: { url: string; height: number; width: number }[];
  href: string;
  genres: string[];
  followers: { href: string; total: number };
};
