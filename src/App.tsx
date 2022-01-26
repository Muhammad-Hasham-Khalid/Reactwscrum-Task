import { Routes, Route } from 'react-router-dom';
import { defaultRoutes } from './routes';
import { NotFound } from './pages';


function App() {
  return (
    <>
      <Routes>
        {defaultRoutes.map((route) => (
          <Route key={route.name} path={route.layout + route.path} element={<route.element />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
