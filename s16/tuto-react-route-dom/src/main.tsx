import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About/index.tsx';
import { Home } from './components/Home/index.tsx';
import { Main } from './components/Main/index.tsx';
import { NotFound } from './components/NotFound/index.tsx';
import { Post } from './components/Post/index.tsx';
import { Posts } from './components/Posts/index.tsx';
import { Redirect } from './components/Redirect/index.tsx';
import './styles/global.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Main/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Posts />} /> */}
        <Route path='/posts' element={<Posts />}> 
          <Route path=':id' element={<Post/>} />
        </Route>
        <Route path='/posts' element={<Posts />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
