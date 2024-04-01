interface ToasterProps {
  message: string;
  visible: boolean;
  additionalCss?: string;
}
const Toaster: React.FC<ToasterProps> = ({
  message,
  visible,
  additionalCss = "w-[20vw]",
}) => {
  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } fixed bottom-[10vh] ${additionalCss} text-white left-1/2 transform -translate-x-1/2 bg-red-500/80 text-center text-[1vw] p-4 rounded shadow-lg z-50`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toaster;
