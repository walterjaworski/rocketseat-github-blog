import { HeaderHome } from './components/Header'
import { PostsList } from './components/PostsList'
import { Search } from './components/Search'

export function PageHome() {
  return (
    <>
      <HeaderHome />
      <Search />
      <PostsList />
    </>
  )
}
