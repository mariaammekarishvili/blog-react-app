export function ModalWindow({ children }) {
  return (
    <div
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.5)",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        placeContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          placeContent: "center",
          placeItems: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
