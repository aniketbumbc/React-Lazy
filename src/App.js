import React, { lazy, Suspense, useState, useEffect } from 'react';
import './App.css';
import NoLazy from './component/NoLazy';
import Loading from './component/Loading';
import PureCom from './component/PureCom';
const LazyLoad = lazy(() => import('./component/LazyLoad'));

function App() {
  const [text, setText] = useState('Hello');

  useEffect(() => {
    setInterval(() => {
      console.log('test');
      setText(' bunny ');
    }, 3000);
  });

  console.log('render Main App', text);
  return (
    <div className='App'>
      <NoLazy />
      <PureCom number={text} />
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
