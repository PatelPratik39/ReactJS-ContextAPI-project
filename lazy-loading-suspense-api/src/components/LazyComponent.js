import React from "react";
import "../lazyStyle.css";

export default function LazyComponent() {
  return (
    <div className={"container"}>
      <h2>A demonstration of Lazy Loading..</h2>
      <div className={"component"}>Im loaded in a lazy manner!</div>
    </div>
  );
}

