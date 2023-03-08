export interface Commit {
    sha: string;
    message: string;
    date: string;
    author: Author
}

export interface Author {
    login: string,
    name: string,
    email: string,
    avatar: string;
}