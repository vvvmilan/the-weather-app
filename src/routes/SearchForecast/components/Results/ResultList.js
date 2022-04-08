import ResultItem from './ResultItem'

import Item from "../../../../Components/Item";

function ResultList({ weatherResults }) {
    return (
        <Item elevation={1} style={{marginTop: 10, overflowY: `auto`, height: `79vh`}}>
            <div>
                {weatherResults.map((weatherInfo, index) =>
                    <ResultItem
                        key={index}
                        weather={weatherInfo}
                    />)
                }
            </div>
        </Item>
    );
}

export default ResultList;