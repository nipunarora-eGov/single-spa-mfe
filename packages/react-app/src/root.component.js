import {btn} from "components-lib";

export default function Root(props) {
  const onCLickHandler = (e) => {
    console.log(e);
  }
  return (
    <div>
      <btn onClick={onCLickHandler}>Click Me!</btn>
      <section>{props.name} is mounted!</section>
    </div>
  )
}
