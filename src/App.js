import React, { lazy, Suspense } from 'react';
import './App.css';
import NoLazy from './component/NoLazy';
import Loading from './component/Loading';
const LazyLoad = lazy(() => import('./component/LazyLoad'));

function App() {
  return (
    <div className='App'>
      <NoLazy />
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <LazyLoad />
      </Suspense>
    </div>
  );
}

export default App;
