import { BeatLoader, ClipLoader } from "react-spinners";

export const Loader = ({height}) => {
  return (
    <div
      style={{
        height: height,
        minHeight: "40vh",
        display: "flex",
        flexDirection: 'column',
        gap: '20px',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ClipLoader color="rgb(12, 131, 31)" size={50} />
    </div>
  );
};
export const ButtonLoader = ({ size, color }) => {
  return <BeatLoader size={size} color={color} />;
};
