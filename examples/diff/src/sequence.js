/* @jsx h */
import { h } from "../../../src/index";

export default function Sequence({ sequence }) {
  return (
    <div className="seq">
      {sequence.map(it =>
        <div key={it} data-key={it} className="box">
          {it}
        </div>
      )}
    </div>
  );
}
