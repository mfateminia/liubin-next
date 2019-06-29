export interface IResearcher {
    firstName: string;
    lastName: string;
    rank: string,
    email: string;
    imageName: string;
    googleScholar: string;
  }

  export interface IResearchArea {
    header: string;
    content: string;
    image: string,
    ref: IRef[];
  }

  export interface IRef {
    title: string;
    authors: string;
    journal: string;
    year: string;
    volume: string;
    page: string;
    link: string;    
  }

  export interface IFeaturedPublication {
    url: string;
    title: string;
    subtitle: string;
    text: string;   
  }

  export interface IPublication {
    id: string;
    year: string;
    type: string;
    containerTitle: string; 
    authors: IAuthor[];
    volume: string;
    page: string;
    doi: string;
    issn: string;
    title: string;   
  }

  export interface IAuthor {
      firstName: string,
      lastName: string,
  }