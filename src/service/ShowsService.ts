import { AxiosPromise } from "axios";
import {
  CastDetail,
  DefaultApi,
  Season,
  ShowDetail,
} from "../generated-sources/openapi/api";

/**
 * Show services from TV Maze API
 */
export class ShowsService {
  static getShowDetail(showId: number): AxiosPromise<ShowDetail> {
    return new DefaultApi().getShowDetail(showId);
  }

  static getCast(showId: number): AxiosPromise<Array<CastDetail>> {
    return new DefaultApi().getShowCast(showId);
  }

  static getSeasons(showId: number): AxiosPromise<Array<Season>> {
    return new DefaultApi().getShowSeasons(showId);
  }
}
