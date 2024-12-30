import React from 'react';

const PackageCard: React.FC<{ title: string; price: string; description: string }> = ({ title, price, description }) => (
    <div className="col-md-3">
        <div className="card shadow-sm">
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{price}</p>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

export default PackageCard;