import React from 'react';

var size = 4;

const SoldHomes = props => (
    <div className="box botContainer">
        <h3 id="nearby-homes">Nearby Similar Sales</h3>
        <ul style={{listStyleType: 'none'}}>
            {
                props.botInfo.slice(0, size).map((items, index) => (
                <li>
                    <div>
                        <div className="property-status">
                            <span className="sold-icon"></span>
                            <span className="sold-info">
                                SOLD: ${items.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </span>
                        </div>
                        <div className="sold-date">
                            Sold on {Math.floor(Math.random() * (12 - 1) + 1)}/{Math.floor(Math.random() * (30 - 1) + 1)}/18
                        </div>
                        <div className="property-info">
                            <span className="house-info">
                                {items.beds} bds, {items.baths} ba, {items.squareFeet} sqft 
                            </span>
                            <div>
                                <a className="house-address" href={items.id}>
                                    {items.address}
                                </a>
                            </div>    
                        </div>
                    <hr className="separator" />
                    </div>
                </li>
            ))}
        </ul>
    </div>
)

export default SoldHomes;