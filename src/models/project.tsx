export declare interface CarouselProjects {
  screenWidth: number;
  projectShow: Project[];
  showCards: [];
  firstIndexProject: number;
  indexProject: number;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

export declare interface Project {
  title: string;
  imageProject: string;
  description: string;
  href: string;
  github: string;
  iconsTechnology: iconTechnology[];
}

export declare interface iconTechnology {
  name: string;
  title: string;
}
