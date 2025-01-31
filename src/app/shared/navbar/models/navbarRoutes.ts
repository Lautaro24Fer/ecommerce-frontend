export interface ChildrenRoute {
  name: string;
  href: string;
}

export interface SubNavbarRoute {
  title: string;
  childrenRoutes: ChildrenRoute[]
}

export interface NavbarRoute{
  name: string;
  mainRoot: string;
  childrenRoutes?: SubNavbarRoute[]  
}