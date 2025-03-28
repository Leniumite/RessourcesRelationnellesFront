//Defining here all data structure we will need to export.
export interface AppUser {
    mail: String;
    roles: String[];
    passwordHash: String;
    passwordClear: String;
    name: string;
}

export interface Community {
    id: string;
    name: string;
    slug: string;
    description: string;
    createdAt: string;
  }
  
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