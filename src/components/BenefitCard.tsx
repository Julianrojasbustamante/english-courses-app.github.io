import React from 'react';
import { IconType } from 'react-icons';

interface BenefitCardProps {
    icon: IconType;
    title: string;
    description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="col-md-4 text-center">
            <Icon size={50} className="main-highlight-color" />
            <h4 className="mt-3">{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default BenefitCard;
