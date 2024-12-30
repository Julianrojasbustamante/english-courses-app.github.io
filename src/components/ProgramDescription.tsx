import React from 'react';

const ProgramDescription: React.FC<{ ageGroup: string; title: string; details: string; example?: string }> = ({ ageGroup, title, details, example }) => (
    <div className="col-md-6">
        <h3>{ageGroup}</h3>
        <p><strong>{title}</strong></p>
        <p>{details}</p>
        {example && <p><em>{example}</em></p>}
    </div>
);

export default ProgramDescription;