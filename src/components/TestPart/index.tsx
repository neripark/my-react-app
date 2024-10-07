import { useAtomValue, useSetAtom } from "jotai";
import { testAtom } from "../../atom"


export const TestPart = () => {
  const atomValue = useAtomValue(testAtom);
  const setAtomValue = useSetAtom(testAtom);
  const toggle = () => setAtomValue((prev) => !prev);

  return (
    <div>
      <div>{atomValue.toString()}</div>
      <button type="button" onClick={toggle}>toggle!</button>
    </div>
  );
}
