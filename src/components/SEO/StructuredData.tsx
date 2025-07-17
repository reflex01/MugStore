import React from 'react';

interface StructuredDataProps {
  data: any | any[];
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  const schemas = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
};

export default StructuredData;