import { parse } from "next-useragent";

const Test = props => {
  let ua;
  if (props.uaString) {
    ua = parse(props.uaString);
  } else {
    ua = parse(window.navigator.userAgent);
  }
  return (
    <div className="p-8 flex flex-col items-center gap-4">
      {ua.isMobile ? <p>yes</p> : <p>no</p>}
    </div>
  );
};

export function getServerSideProps(context) {
  return {
    props: {
      uaString: context.req.headers["user-agent"]
    }
  };
}

export default Test;
