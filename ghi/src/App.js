import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import HowItWorks from './HowItWorks'
import PostForm from './NewPost';
import PaymentForm from './PaymentForm';

function App(props) {
  return (
    <BrowserRouter>
    <Nav />
    <div className="container">
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/post-form" element={<PostForm />} />
        <Route path="/payment-form" element={<PaymentForm />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
