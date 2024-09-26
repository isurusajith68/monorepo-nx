import { add } from "@new/sample-lib";
export default function Home() {
  return (
    <div>
      <h1>Welcome to web!</h1>
      <p>{add(1, 25)}</p>
    </div>
  );
}
