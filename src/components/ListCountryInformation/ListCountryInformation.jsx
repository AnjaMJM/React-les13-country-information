import "./ListCountryInformation.css"

function ListCountryInformation({flag, countryName, imgAlt, region, listKey, number}) {
let color = 'grey'
    switch (region) {
        case 'Africa':
            color = 'blue';
            break;
        case 'Americas':
            color = 'green';
            break;
        case 'Asia':
            color = 'red';
            break;
        case 'Europe':
            color = 'yellow';
            break;
        case 'Oceania':
            color = 'purple';
            break;
    }

    return (
        <div key={listKey} className="list-countries-wrapper">
            <li className="list-countries-item">
            <img className="img-flag" src={flag} alt={imgAlt} />
            <div className="list-countries-info">
                <h2 className={color}>{countryName}</h2>
                <p>Has a population of {number} people</p>
            </div>
            </li>
        </div>
    );
}

export default ListCountryInformation;