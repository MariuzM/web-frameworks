/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutImport } from './routes/about'
import { Route as Test5RouteImport } from './routes/test5/route'
import { Route as IndexImport } from './routes/index'
import { Route as Test5IndexImport } from './routes/test5/index'
import { Route as Test3IndexImport } from './routes/test3/index'
import { Route as TestIndexImport } from './routes/test/index'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as Test8TsqImport } from './routes/test8/tsq'
import { Route as Test7SearchImport } from './routes/test7/search'
import { Route as Test6IdImport } from './routes/test6/$id'
import { Route as Test5AboutImport } from './routes/test5/about'
import { Route as Test4AuthImport } from './routes/test4/auth'
import { Route as Test3AboutImport } from './routes/test3/about'
import { Route as Test3LayoutImport } from './routes/test3/_layout'
import { Route as Test2LayoutImport } from './routes/test2/_layout'
import { Route as TestAboutImport } from './routes/test/about'
import { Route as AdminSettingsImport } from './routes/admin/settings'
import { Route as Test4AuthIndexImport } from './routes/test4/auth/index'
import { Route as Test2LayoutIndexImport } from './routes/test2/_layout/index'
import { Route as Test4AuthAboutImport } from './routes/test4/auth/about'
import { Route as Test2LayoutAboutImport } from './routes/test2/_layout/about'
import { Route as TestUserAboutImport } from './routes/test/user.about'

// Create Virtual Routes

const Test3Import = createFileRoute('/test3')()
const Test2Import = createFileRoute('/test2')()

// Create/Update Routes

const Test3Route = Test3Import.update({
  path: '/test3',
  getParentRoute: () => rootRoute,
} as any)

const Test2Route = Test2Import.update({
  path: '/test2',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const Test5RouteRoute = Test5RouteImport.update({
  path: '/test5',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const Test5IndexRoute = Test5IndexImport.update({
  path: '/',
  getParentRoute: () => Test5RouteRoute,
} as any)

const Test3IndexRoute = Test3IndexImport.update({
  path: '/',
  getParentRoute: () => Test3Route,
} as any)

const TestIndexRoute = TestIndexImport.update({
  path: '/test/',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  path: '/admin/',
  getParentRoute: () => rootRoute,
} as any)

const Test8TsqRoute = Test8TsqImport.update({
  path: '/test8/tsq',
  getParentRoute: () => rootRoute,
} as any)

const Test7SearchRoute = Test7SearchImport.update({
  path: '/test7/search',
  getParentRoute: () => rootRoute,
} as any)

const Test6IdRoute = Test6IdImport.update({
  path: '/test6/$id',
  getParentRoute: () => rootRoute,
} as any)

const Test5AboutRoute = Test5AboutImport.update({
  path: '/about',
  getParentRoute: () => Test5RouteRoute,
} as any)

const Test4AuthRoute = Test4AuthImport.update({
  path: '/test4/auth',
  getParentRoute: () => rootRoute,
} as any)

const Test3AboutRoute = Test3AboutImport.update({
  path: '/about',
  getParentRoute: () => Test3Route,
} as any)

const Test3LayoutRoute = Test3LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => Test3Route,
} as any)

const Test2LayoutRoute = Test2LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => Test2Route,
} as any)

const TestAboutRoute = TestAboutImport.update({
  path: '/test/about',
  getParentRoute: () => rootRoute,
} as any)

const AdminSettingsRoute = AdminSettingsImport.update({
  path: '/admin/settings',
  getParentRoute: () => rootRoute,
} as any)

const Test4AuthIndexRoute = Test4AuthIndexImport.update({
  path: '/',
  getParentRoute: () => Test4AuthRoute,
} as any)

const Test2LayoutIndexRoute = Test2LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => Test2LayoutRoute,
} as any)

const Test4AuthAboutRoute = Test4AuthAboutImport.update({
  path: '/about',
  getParentRoute: () => Test4AuthRoute,
} as any)

const Test2LayoutAboutRoute = Test2LayoutAboutImport.update({
  path: '/about',
  getParentRoute: () => Test2LayoutRoute,
} as any)

const TestUserAboutRoute = TestUserAboutImport.update({
  path: '/test/user/about',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/test5': {
      id: '/test5'
      path: '/test5'
      fullPath: '/test5'
      preLoaderRoute: typeof Test5RouteImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/admin/settings': {
      id: '/admin/settings'
      path: '/admin/settings'
      fullPath: '/admin/settings'
      preLoaderRoute: typeof AdminSettingsImport
      parentRoute: typeof rootRoute
    }
    '/test/about': {
      id: '/test/about'
      path: '/test/about'
      fullPath: '/test/about'
      preLoaderRoute: typeof TestAboutImport
      parentRoute: typeof rootRoute
    }
    '/test2': {
      id: '/test2'
      path: '/test2'
      fullPath: '/test2'
      preLoaderRoute: typeof Test2Import
      parentRoute: typeof rootRoute
    }
    '/test2/_layout': {
      id: '/test2/_layout'
      path: '/test2'
      fullPath: '/test2'
      preLoaderRoute: typeof Test2LayoutImport
      parentRoute: typeof Test2Route
    }
    '/test3': {
      id: '/test3'
      path: '/test3'
      fullPath: '/test3'
      preLoaderRoute: typeof Test3Import
      parentRoute: typeof rootRoute
    }
    '/test3/_layout': {
      id: '/test3/_layout'
      path: '/test3'
      fullPath: '/test3'
      preLoaderRoute: typeof Test3LayoutImport
      parentRoute: typeof Test3Route
    }
    '/test3/about': {
      id: '/test3/about'
      path: '/about'
      fullPath: '/test3/about'
      preLoaderRoute: typeof Test3AboutImport
      parentRoute: typeof Test3Import
    }
    '/test4/auth': {
      id: '/test4/auth'
      path: '/test4/auth'
      fullPath: '/test4/auth'
      preLoaderRoute: typeof Test4AuthImport
      parentRoute: typeof rootRoute
    }
    '/test5/about': {
      id: '/test5/about'
      path: '/about'
      fullPath: '/test5/about'
      preLoaderRoute: typeof Test5AboutImport
      parentRoute: typeof Test5RouteImport
    }
    '/test6/$id': {
      id: '/test6/$id'
      path: '/test6/$id'
      fullPath: '/test6/$id'
      preLoaderRoute: typeof Test6IdImport
      parentRoute: typeof rootRoute
    }
    '/test7/search': {
      id: '/test7/search'
      path: '/test7/search'
      fullPath: '/test7/search'
      preLoaderRoute: typeof Test7SearchImport
      parentRoute: typeof rootRoute
    }
    '/test8/tsq': {
      id: '/test8/tsq'
      path: '/test8/tsq'
      fullPath: '/test8/tsq'
      preLoaderRoute: typeof Test8TsqImport
      parentRoute: typeof rootRoute
    }
    '/admin/': {
      id: '/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof rootRoute
    }
    '/test/': {
      id: '/test/'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof TestIndexImport
      parentRoute: typeof rootRoute
    }
    '/test3/': {
      id: '/test3/'
      path: '/'
      fullPath: '/test3/'
      preLoaderRoute: typeof Test3IndexImport
      parentRoute: typeof Test3Import
    }
    '/test5/': {
      id: '/test5/'
      path: '/'
      fullPath: '/test5/'
      preLoaderRoute: typeof Test5IndexImport
      parentRoute: typeof Test5RouteImport
    }
    '/test/user/about': {
      id: '/test/user/about'
      path: '/test/user/about'
      fullPath: '/test/user/about'
      preLoaderRoute: typeof TestUserAboutImport
      parentRoute: typeof rootRoute
    }
    '/test2/_layout/about': {
      id: '/test2/_layout/about'
      path: '/about'
      fullPath: '/test2/about'
      preLoaderRoute: typeof Test2LayoutAboutImport
      parentRoute: typeof Test2LayoutImport
    }
    '/test4/auth/about': {
      id: '/test4/auth/about'
      path: '/about'
      fullPath: '/test4/auth/about'
      preLoaderRoute: typeof Test4AuthAboutImport
      parentRoute: typeof Test4AuthImport
    }
    '/test2/_layout/': {
      id: '/test2/_layout/'
      path: '/'
      fullPath: '/test2/'
      preLoaderRoute: typeof Test2LayoutIndexImport
      parentRoute: typeof Test2LayoutImport
    }
    '/test4/auth/': {
      id: '/test4/auth/'
      path: '/'
      fullPath: '/test4/auth/'
      preLoaderRoute: typeof Test4AuthIndexImport
      parentRoute: typeof Test4AuthImport
    }
  }
}

// Create and export the route tree

interface Test5RouteRouteChildren {
  Test5AboutRoute: typeof Test5AboutRoute
  Test5IndexRoute: typeof Test5IndexRoute
}

const Test5RouteRouteChildren: Test5RouteRouteChildren = {
  Test5AboutRoute: Test5AboutRoute,
  Test5IndexRoute: Test5IndexRoute,
}

const Test5RouteRouteWithChildren = Test5RouteRoute._addFileChildren(
  Test5RouteRouteChildren,
)

interface Test2LayoutRouteChildren {
  Test2LayoutAboutRoute: typeof Test2LayoutAboutRoute
  Test2LayoutIndexRoute: typeof Test2LayoutIndexRoute
}

const Test2LayoutRouteChildren: Test2LayoutRouteChildren = {
  Test2LayoutAboutRoute: Test2LayoutAboutRoute,
  Test2LayoutIndexRoute: Test2LayoutIndexRoute,
}

const Test2LayoutRouteWithChildren = Test2LayoutRoute._addFileChildren(
  Test2LayoutRouteChildren,
)

interface Test2RouteChildren {
  Test2LayoutRoute: typeof Test2LayoutRouteWithChildren
}

const Test2RouteChildren: Test2RouteChildren = {
  Test2LayoutRoute: Test2LayoutRouteWithChildren,
}

const Test2RouteWithChildren = Test2Route._addFileChildren(Test2RouteChildren)

interface Test3RouteChildren {
  Test3LayoutRoute: typeof Test3LayoutRoute
  Test3AboutRoute: typeof Test3AboutRoute
  Test3IndexRoute: typeof Test3IndexRoute
}

const Test3RouteChildren: Test3RouteChildren = {
  Test3LayoutRoute: Test3LayoutRoute,
  Test3AboutRoute: Test3AboutRoute,
  Test3IndexRoute: Test3IndexRoute,
}

const Test3RouteWithChildren = Test3Route._addFileChildren(Test3RouteChildren)

interface Test4AuthRouteChildren {
  Test4AuthAboutRoute: typeof Test4AuthAboutRoute
  Test4AuthIndexRoute: typeof Test4AuthIndexRoute
}

const Test4AuthRouteChildren: Test4AuthRouteChildren = {
  Test4AuthAboutRoute: Test4AuthAboutRoute,
  Test4AuthIndexRoute: Test4AuthIndexRoute,
}

const Test4AuthRouteWithChildren = Test4AuthRoute._addFileChildren(
  Test4AuthRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/test5': typeof Test5RouteRouteWithChildren
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/test/about': typeof TestAboutRoute
  '/test2': typeof Test2LayoutRouteWithChildren
  '/test3': typeof Test3LayoutRoute
  '/test3/about': typeof Test3AboutRoute
  '/test4/auth': typeof Test4AuthRouteWithChildren
  '/test5/about': typeof Test5AboutRoute
  '/test6/$id': typeof Test6IdRoute
  '/test7/search': typeof Test7SearchRoute
  '/test8/tsq': typeof Test8TsqRoute
  '/admin': typeof AdminIndexRoute
  '/test': typeof TestIndexRoute
  '/test3/': typeof Test3IndexRoute
  '/test5/': typeof Test5IndexRoute
  '/test/user/about': typeof TestUserAboutRoute
  '/test2/about': typeof Test2LayoutAboutRoute
  '/test4/auth/about': typeof Test4AuthAboutRoute
  '/test2/': typeof Test2LayoutIndexRoute
  '/test4/auth/': typeof Test4AuthIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/test/about': typeof TestAboutRoute
  '/test2': typeof Test2LayoutIndexRoute
  '/test3': typeof Test3IndexRoute
  '/test3/about': typeof Test3AboutRoute
  '/test5/about': typeof Test5AboutRoute
  '/test6/$id': typeof Test6IdRoute
  '/test7/search': typeof Test7SearchRoute
  '/test8/tsq': typeof Test8TsqRoute
  '/admin': typeof AdminIndexRoute
  '/test': typeof TestIndexRoute
  '/test5': typeof Test5IndexRoute
  '/test/user/about': typeof TestUserAboutRoute
  '/test2/about': typeof Test2LayoutAboutRoute
  '/test4/auth/about': typeof Test4AuthAboutRoute
  '/test4/auth': typeof Test4AuthIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/test5': typeof Test5RouteRouteWithChildren
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/test/about': typeof TestAboutRoute
  '/test2': typeof Test2RouteWithChildren
  '/test2/_layout': typeof Test2LayoutRouteWithChildren
  '/test3': typeof Test3RouteWithChildren
  '/test3/_layout': typeof Test3LayoutRoute
  '/test3/about': typeof Test3AboutRoute
  '/test4/auth': typeof Test4AuthRouteWithChildren
  '/test5/about': typeof Test5AboutRoute
  '/test6/$id': typeof Test6IdRoute
  '/test7/search': typeof Test7SearchRoute
  '/test8/tsq': typeof Test8TsqRoute
  '/admin/': typeof AdminIndexRoute
  '/test/': typeof TestIndexRoute
  '/test3/': typeof Test3IndexRoute
  '/test5/': typeof Test5IndexRoute
  '/test/user/about': typeof TestUserAboutRoute
  '/test2/_layout/about': typeof Test2LayoutAboutRoute
  '/test4/auth/about': typeof Test4AuthAboutRoute
  '/test2/_layout/': typeof Test2LayoutIndexRoute
  '/test4/auth/': typeof Test4AuthIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/test5'
    | '/about'
    | '/contact'
    | '/admin/settings'
    | '/test/about'
    | '/test2'
    | '/test3'
    | '/test3/about'
    | '/test4/auth'
    | '/test5/about'
    | '/test6/$id'
    | '/test7/search'
    | '/test8/tsq'
    | '/admin'
    | '/test'
    | '/test3/'
    | '/test5/'
    | '/test/user/about'
    | '/test2/about'
    | '/test4/auth/about'
    | '/test2/'
    | '/test4/auth/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/contact'
    | '/admin/settings'
    | '/test/about'
    | '/test2'
    | '/test3'
    | '/test3/about'
    | '/test5/about'
    | '/test6/$id'
    | '/test7/search'
    | '/test8/tsq'
    | '/admin'
    | '/test'
    | '/test5'
    | '/test/user/about'
    | '/test2/about'
    | '/test4/auth/about'
    | '/test4/auth'
  id:
    | '__root__'
    | '/'
    | '/test5'
    | '/about'
    | '/contact'
    | '/admin/settings'
    | '/test/about'
    | '/test2'
    | '/test2/_layout'
    | '/test3'
    | '/test3/_layout'
    | '/test3/about'
    | '/test4/auth'
    | '/test5/about'
    | '/test6/$id'
    | '/test7/search'
    | '/test8/tsq'
    | '/admin/'
    | '/test/'
    | '/test3/'
    | '/test5/'
    | '/test/user/about'
    | '/test2/_layout/about'
    | '/test4/auth/about'
    | '/test2/_layout/'
    | '/test4/auth/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  Test5RouteRoute: typeof Test5RouteRouteWithChildren
  AboutRoute: typeof AboutRoute
  ContactRoute: typeof ContactRoute
  AdminSettingsRoute: typeof AdminSettingsRoute
  TestAboutRoute: typeof TestAboutRoute
  Test2Route: typeof Test2RouteWithChildren
  Test3Route: typeof Test3RouteWithChildren
  Test4AuthRoute: typeof Test4AuthRouteWithChildren
  Test6IdRoute: typeof Test6IdRoute
  Test7SearchRoute: typeof Test7SearchRoute
  Test8TsqRoute: typeof Test8TsqRoute
  AdminIndexRoute: typeof AdminIndexRoute
  TestIndexRoute: typeof TestIndexRoute
  TestUserAboutRoute: typeof TestUserAboutRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  Test5RouteRoute: Test5RouteRouteWithChildren,
  AboutRoute: AboutRoute,
  ContactRoute: ContactRoute,
  AdminSettingsRoute: AdminSettingsRoute,
  TestAboutRoute: TestAboutRoute,
  Test2Route: Test2RouteWithChildren,
  Test3Route: Test3RouteWithChildren,
  Test4AuthRoute: Test4AuthRouteWithChildren,
  Test6IdRoute: Test6IdRoute,
  Test7SearchRoute: Test7SearchRoute,
  Test8TsqRoute: Test8TsqRoute,
  AdminIndexRoute: AdminIndexRoute,
  TestIndexRoute: TestIndexRoute,
  TestUserAboutRoute: TestUserAboutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/test5",
        "/about",
        "/contact",
        "/admin/settings",
        "/test/about",
        "/test2",
        "/test3",
        "/test4/auth",
        "/test6/$id",
        "/test7/search",
        "/test8/tsq",
        "/admin/",
        "/test/",
        "/test/user/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/test5": {
      "filePath": "test5/route.tsx",
      "children": [
        "/test5/about",
        "/test5/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/admin/settings": {
      "filePath": "admin/settings.tsx"
    },
    "/test/about": {
      "filePath": "test/about.tsx"
    },
    "/test2": {
      "filePath": "test2",
      "children": [
        "/test2/_layout"
      ]
    },
    "/test2/_layout": {
      "filePath": "test2/_layout.tsx",
      "parent": "/test2",
      "children": [
        "/test2/_layout/about",
        "/test2/_layout/"
      ]
    },
    "/test3": {
      "filePath": "test3",
      "children": [
        "/test3/_layout",
        "/test3/about",
        "/test3/"
      ]
    },
    "/test3/_layout": {
      "filePath": "test3/_layout.tsx",
      "parent": "/test3"
    },
    "/test3/about": {
      "filePath": "test3/about.tsx",
      "parent": "/test3"
    },
    "/test4/auth": {
      "filePath": "test4/auth.tsx",
      "children": [
        "/test4/auth/about",
        "/test4/auth/"
      ]
    },
    "/test5/about": {
      "filePath": "test5/about.tsx",
      "parent": "/test5"
    },
    "/test6/$id": {
      "filePath": "test6/$id.tsx"
    },
    "/test7/search": {
      "filePath": "test7/search.tsx"
    },
    "/test8/tsq": {
      "filePath": "test8/tsq.tsx"
    },
    "/admin/": {
      "filePath": "admin/index.tsx"
    },
    "/test/": {
      "filePath": "test/index.tsx"
    },
    "/test3/": {
      "filePath": "test3/index.tsx",
      "parent": "/test3"
    },
    "/test5/": {
      "filePath": "test5/index.tsx",
      "parent": "/test5"
    },
    "/test/user/about": {
      "filePath": "test/user.about.tsx"
    },
    "/test2/_layout/about": {
      "filePath": "test2/_layout/about.tsx",
      "parent": "/test2/_layout"
    },
    "/test4/auth/about": {
      "filePath": "test4/auth/about.tsx",
      "parent": "/test4/auth"
    },
    "/test2/_layout/": {
      "filePath": "test2/_layout/index.tsx",
      "parent": "/test2/_layout"
    },
    "/test4/auth/": {
      "filePath": "test4/auth/index.tsx",
      "parent": "/test4/auth"
    }
  }
}
ROUTE_MANIFEST_END */
