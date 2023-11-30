import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>calc</h1>
      <div className="theme">
        <h3>THEME</h3>
        <div className="toggle">
          <label htmlFor="box1">1</label>
          <label htmlFor="box2">2</label>
          <label htmlFor="box3">3</label>
          <div className="inputs">
            <input type="radio" id="box1" name="choice" defaultChecked />
            <input type="radio" id="box2" name="choice" />
            <input type="radio" id="box3" name="choice" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
