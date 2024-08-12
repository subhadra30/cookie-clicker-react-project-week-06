export default function LevelUpgradeComponent(props) {
  return (
    <div className="upgrade-container">
      <img className="icon" src={props.image} />
      <p>Shop: {props.name}</p>
      <p>Count: {props.clickedcount}</p>
      <p>Min. cookies: {props.requiredcount}</p>
      <p>Cookies per second: {props.cpsincrement}</p>
      <button onClick={props.buyfunction}>Buy More</button>
    </div>
  );
}
