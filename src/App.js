import React, { lazy, Suspense, useState, useEffect } from 'react';
import './App.css';
import NoLazy from './component/NoLazy';
import Loading from './component/Loading';
import PureCom from './component/PureCom';
const LazyLoad = lazy(() => import('./component/LazyLoad'));

function App() {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setNumber(number);
    }, 1000);
  }, [number]);

  console.log('render Main App', number);
  return (
    <div className='App'>
      <NoLazy />
      <PureCom number={number} />
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
