/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as AdminSettingsImport } from './routes/admin/settings'

// Create/Update Routes

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  path: '/admin/',
  getParentRoute: () => rootRoute,
} as any)

const AdminSettingsRoute = AdminSettingsImport.update({
  path: '/admin/settings',
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
    '/admin/': {
      id: '/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/admin': typeof AdminIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/admin': typeof AdminIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/admin/': typeof AdminIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/contact' | '/admin/settings' | '/admin'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/contact' | '/admin/settings' | '/admin'
  id: '__root__' | '/' | '/about' | '/contact' | '/admin/settings' | '/admin/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ContactRoute: typeof ContactRoute
  AdminSettingsRoute: typeof AdminSettingsRoute
  AdminIndexRoute: typeof AdminIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ContactRoute: ContactRoute,
  AdminSettingsRoute: AdminSettingsRoute,
  AdminIndexRoute: AdminIndexRoute,
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
        "/about",
        "/contact",
        "/admin/settings",
        "/admin/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
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
    "/admin/": {
      "filePath": "admin/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
