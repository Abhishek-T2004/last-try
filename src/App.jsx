import { RootRoute, Router, RouterProvider, Route, Outlet } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Timeline from './pages/Timeline'
import About from './pages/About'
import ContributorDashboard from './pages/ContributorDashboard'
import Login from './pages/Login'
import Navbar from './components/Navbar'

const queryClient = new QueryClient()

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const articlesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/articles',
  component: Articles,
})

const timelineRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/timeline',
  component: Timeline,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const contributorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contribute',
  component: ContributorDashboard,
})

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  articlesRoute,
  timelineRoute,
  aboutRoute,
  contributorRoute,
  loginRoute,
])

const router = new Router({ routeTree })

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
