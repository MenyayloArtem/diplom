import React from "react";

export interface InfoBlockProps {
  header?: string;
  className?: string;
  text: string | React.ReactNode;
  image?: {
    position: "left" | "right";
    component: React.ReactNode;
  };
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  header,
  text,
  image,
  className,
}) => {
  const isImageLeft = !image || (image && image.position === "left");

  return (
    <div className={className}>
      <div
        className={`flex flex-col-reverse ${
          isImageLeft ? "md:flex-row-reverse" : "md:flex-row"
        } bg-white shadow-md rounded-lg overflow-hidden`}
      >
        <div className={`${image ? "md:w-2/3 " : ""} sm:w-full p-6`}>
          {header && (
            <h2 className="text-2xl text-left font-semibold mb-4 text-gray-800">
              {header}
            </h2>
          )}
          <div className="text-gray-700 text-left">{text}</div>
        </div>

        {image && (
          <div className={`${image ? "md:w-1/3 sm:w-full" : "w-full"}`}>
            <div className="p-4 overflow-hidden rounded-xl">
              {image.component}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBlock;
