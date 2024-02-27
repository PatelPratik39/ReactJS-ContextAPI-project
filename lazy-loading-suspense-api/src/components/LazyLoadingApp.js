import React, { Suspense } from "react";
// import Test from "./Test";
const OtherComponent = React.lazy(() => import("./LazyComponent"));
export default function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...Please wait..</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

