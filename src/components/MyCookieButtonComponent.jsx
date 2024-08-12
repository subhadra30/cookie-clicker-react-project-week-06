import CountComponent from "./CountComponent";
import cookieimage from "./cropped-cookie.png";
export default function MyCookieButtonComponent(props) {
  return (
    <div className="displaycookie">
      <img
        className="cookieclick"
        src={cookieimage}
        onClick={props.increasecookiesfunction}
      />
      <CountComponent cookies={props.cookies} cps={props.cps} />
    </div>
  );
}
