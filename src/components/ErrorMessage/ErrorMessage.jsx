const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: 14,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "rgb(254,95,31)",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
