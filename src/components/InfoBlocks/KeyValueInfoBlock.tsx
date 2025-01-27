import React from "react";
import InfoBlock, { InfoBlockProps } from "../InfoBlock.tsx";

interface KeyValueInfoBlockProps
  extends Omit<InfoBlockProps, "text" | "image"> {
  title: string;
  image: React.ReactNode;
  info: {
    key: string;
    value: string;
    href?: string;
  }[];
  after? : React.ReactNode
}

const KeyValueInfoBlock: React.FC<KeyValueInfoBlockProps> = ({
  header,
  title,
  info,
  image,
  after
}) => {
  return (
    <InfoBlock
      image={{
        position: "left",
        component: image,
      }}
      header={header}
      text={
        <div>
          <div className="text-md text-gray-500 font-bold">{title}</div>

          {info.map(({ key, value, href }, i) => (
            <div className="info mt-4" key={i}>
              <div className="info__key font-semibold">{key}:</div>
              <div className="info__value">
                {href ? (
                  <a className="text-blue-500" href={href}>
                    {value}
                  </a>
                ) : (
                  value
                )}
              </div>
            </div>
          ))}
          { after }
        </div>
      }
    />
  );
};

export default KeyValueInfoBlock;
