import React from 'react';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="section-title text-center" style={{ color: '#6400ea' }}>{title}</h2>
);

export default SectionHeader;