//Defining here all data structure we will need to export.
export interface AppUser {
    mail: String;
    roles: String[];
    password: String;
    plainpassword: String;
    name: string;
}

//Purely fictionnal as API code for this is not written
export interface Community {
    id: string;
    name: string;
    slug: string;
    description: string;
    createdAt: string;
  }
  
//Purely fictionnal as API code for this is not written
  export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
    communityId: string;
    createdAt: string;
    useful: number;
    useless: number;
  }