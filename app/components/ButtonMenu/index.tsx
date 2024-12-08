function ButtonMenu(props) {
  const judul = props.title;
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <img src="" width={24} height={24} />
      <div
        style={{
          marginLeft: 4,
          color: "red",
          alignItems: "center",
        }}
      >
        {judul}
      </div>
    </div>
  );
}

export default ButtonMenu;
