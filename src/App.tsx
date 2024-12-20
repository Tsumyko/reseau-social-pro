import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/news" element={<div>News Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;