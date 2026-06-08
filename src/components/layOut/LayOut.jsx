// components/layOut/LayOut.js

const LayOut = ({ children }) => {
  return (
    <div style={{ minHeight: "80vh", padding: "20px" }}>
      {children}
    </div>
  );
};

export default LayOut;