import "./ListCountryInformation.css"

function ListCountryInformation({flag, countryName, imgAlt, region, listKey}) {
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
        <div>
            <li key={listKey}>
            <img className="img-flag" src={flag} alt={imgAlt} />
            <h1 className={color}>{countryName}</h1>
            </li>
        </div>
    );
}

export default ListCountryInformation;