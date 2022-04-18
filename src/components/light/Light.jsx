function Light({ on, color = "rgb(4, 192, 4)", label }) {
  const lightColor = on ? color : "#ccc";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: lightColor,
          borderRadius: "50%",
          border: "1px solid black",
        }}
      ></div>
      <p
        style={{
          textTransform: "uppercase",
          marginTop: "4px",
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default Light;
