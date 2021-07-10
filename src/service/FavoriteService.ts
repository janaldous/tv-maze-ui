/**
 * Save favorite TV shows on local storage
 */
export default class FavoriteService {
  static getFavorites(): { [showId: number]: string } {
    return JSON.parse(window.localStorage.getItem("favorites") || "{}");
  }

  static isFavorite(showId: number): boolean {
    return !!FavoriteService.getFavorites()[showId];
  }

  static addFavorite(showId: number) {
    const favoriteShows = FavoriteService.getFavorites();
    favoriteShows[showId] = showId + "";
    window.localStorage.setItem("favorites", JSON.stringify(favoriteShows));
  }

  static removeFavorite(showId: number) {
    const favoriteShows = FavoriteService.getFavorites();
    delete favoriteShows[showId];
    window.localStorage.setItem("favorites", JSON.stringify(favoriteShows));
  }
}
