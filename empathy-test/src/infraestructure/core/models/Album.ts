export type AlbumType = {
  total: number;
  items: AlbumDetailType[];
  href: string;
  previous: string;
  next: string;
  offset: number;
  limit: number;
};

export type AlbumDetailType = {
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
  artists: { id: string; name: string }[];
  images: { url: string; height: number; width: number }[];
};
