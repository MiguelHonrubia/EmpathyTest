export type TrackType = {
  total: number;
  items: TrackDetailType[];
  href: string;
  previous: string;
  next: string;
  offset: number;
  limit: number;
};

export type TrackDetailType = {
  popularity: number;
  name: string;
  id: string;
  href: string;
  duration: number;
  disc_number: number;
  artists: { id: string; name: string }[];
  album: {
    id: string;
    name: string;
  };
};
