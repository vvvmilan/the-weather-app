import ResultItem from './ResultItem'

import Item from "../../../../Components/Item";

function SearchResults({ weather }) {
    return (
        <Item elevation={1} style={{
            backgroundColor: `#fff`,
            marginTop: 10,
            position: `absolute`,
            width: `100%`,
            zIndex: 1,}}>
            <div>
                {weather.map((weatherInfo, index) =>
                    <ResultItem
                        key={index}
                        weather={weatherInfo}
                    />)
                }
            </div>
        </Item>
    )
}

export default SearchResults;
