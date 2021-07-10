import { AxiosPromise } from "axios";
import { DefaultApi, SearchResult } from "../generated-sources/openapi/api";

/**
 * Search shows by name from TV Maze API
 */
export class SearchService {
  static searchShows(query?: string): AxiosPromise<Array<SearchResult>> {
    return new DefaultApi().searchShows(query);
  }
}
