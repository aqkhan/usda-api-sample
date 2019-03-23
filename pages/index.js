import React, { useState } from 'react';
const data = require('../stub/data-sample.json');

const leftBaxa = {
    width: '45%',
    float: 'left'
};

const rightBaxa = {
    width: '45%',
    float: 'right'
}

const displayNutrients = ( nutrients ) => {
    return nutrients.map( (nutrient, index) => (
        <ul>
            <li key={ index }><b>{ nutrient.nutrient }</b>: { nutrient.value } { nutrient.unit } / { nutrient.gm } gm</li>
        </ul>
    ))
};

const Index = () => {
    const [ searchTerm, updateSearchTerm ] = useState('');
    const [ selectedFood, updateSelectedFood ] = useState([]);
    let filterData = (searchTerm.length > 2) ? data.report.foods.filter( item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) : [];

    return(
        <div>
            <h1>USDA API</h1>
            <h3>API call fetched and stored in JSON file</h3>
            <h4>Search apple for example</h4>
            <div style={leftBaxa}>
                <input placeholder="Search here..." onKeyUp= { (e) => updateSearchTerm( e.target.value )  } />
                <h4>You searched for: { searchTerm }</h4>
                <ul>
                    {
                        filterData.map( (item, index) => (
                            <li key={ index } onClick={ () => {
                                updateSelectedFood( [ ...selectedFood, item ] );
                                updateSearchTerm('');
                            }}>{ item.name }</li>
                        ))
                    }
                </ul>
            </div>
            <div style={rightBaxa}>
                <h4>You've added the following: </h4>
                <button onClick={ () => updateSelectedFood([]) }>Clear choices</button>
                <ul>
                    {
                        selectedFood.map( (item, index) => (
                            <React.Fragment>
                                <li key={ index }><h4>{ item.name }</h4></li>
                                <li key={ index + Date.now().toString() }>{ displayNutrients(item.nutrients) }</li>
                            </React.Fragment>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Index;