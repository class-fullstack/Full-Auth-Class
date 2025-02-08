import React, { Suspense } from "react";
import LoadingPage from "../pages/loading-page";

const lazyLoader = (importFunc, delay = 0) => {
  const LazyComponent = React.lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(importFunc()), delay);
      })
  );

  return (props) => (
    <Suspense fallback={<LoadingPage />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default lazyLoader;
