function ButtonMenu(props: any) {
  const judul = props.title;
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <img src="/images/nextjs-logo.png" width={24} height={24} />
      <div
        style={{
          color: "var(--Gray-900, #101828)",
          fontFamily: "Inter",
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "44px",
          letterSpacing: "-0.72px",
        }}
      >
        {judul}
      </div>
    </div>
  );
}

export default ButtonMenu;
