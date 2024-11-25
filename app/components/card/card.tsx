import ButtonComponent from "../atom/button";

function CardComponent(props) {
  return (
    <h1
      style={{
        color: "var(--Gray-900, #101828)",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "500",
        lineHeight: "38px",
      }}
    >
      {props.title}
      <ButtonComponent/>
    </h1>
  );
}

export default CardComponent;
