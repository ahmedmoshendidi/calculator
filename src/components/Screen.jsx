function Screen({ onScreen }) {
  return (
    <form action="">
      <input type="text" className="screen" value={onScreen} readOnly />
    </form>
  );
}
export default Screen;
