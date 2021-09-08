import { search } from "../../core/services/spotify";

export const fetchSearch = (searchText) => search(searchText);
