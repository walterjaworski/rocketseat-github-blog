import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { PageHome } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PageHome />} />
        <Route path="/:number" element={<Post />} />
      </Route>
    </Routes>
  )
}
