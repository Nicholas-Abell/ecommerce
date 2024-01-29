import React from "react";

type headingProps = {
  title: string;
  description: string;
};

const Heading: React.FC<headingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default Heading;
