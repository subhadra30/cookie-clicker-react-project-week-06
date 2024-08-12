export default function CountComponent(props) {
  return (
    <div>
      <h3>Cookies:{props.cookies}</h3>
      <h3>Cookies per sec: {props.cps}</h3>
    </div>
  );
}
