import React,  { JSX } from 'react';
import { IconType } from 'react-icons';

interface BenefitCardProps {
    icon: IconType;
    title: string;
    description: string;
}

const BenefitCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="col-md-4 text-center">
        {icon}
        <h4 className="mt-3">{title}</h4>
        <p>{description}</p>
    </div>
);


export default BenefitCard;
