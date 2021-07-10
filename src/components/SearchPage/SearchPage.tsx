import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchResult } from "../../generated-sources/openapi/api";
import { SearchService } from "../../service/SearchService";
import ShowCard from "../ShowCard/ShowCard";
import "./SearchPage.scss";
import qs from "qs";

const SearchPage: React.FC<{}> = () => {
  const [results, setResults] = React.useState<Array<SearchResult>>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>();

  const location = useLocation();
  const { query } = qs.parse(location.search.substring(1));

  const searchShowsApiCall = (query: string) => {
    SearchService.searchShows(query).then((res) => {
      setResults(res.data);
    });
  };

  const handleEnterKeyPressOnSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      searchShowsApiCall(e.currentTarget.value);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setSearchQuery(text);
  };

  React.useEffect(() => {
    setSearchQuery(query as string);
    searchShowsApiCall((query as string) || "");
  }, [query]);

  return (
    <div className="search-results-page">
      <div className="row">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search for a TV show"
          value={searchQuery}
          onChange={handleTextChange}
          onKeyUp={handleEnterKeyPressOnSearch}
        />
      </div>
      <div className="row row-col">
        {results.map((searchResult) => (
          <div
            key={searchResult.show.id}
            className="col-4 d-flex justify-content-center"
          >
            <Link
              to={{
                pathname: `shows/${searchResult.show.id}`,
                state: { redirectUrl: `/?query=${searchQuery}` },
              }}
            >
              <ShowCard show={searchResult} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
