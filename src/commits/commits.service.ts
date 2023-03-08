import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { Commit } from 'src/core/models/commit.model';

const octokit = new Octokit({});

@Injectable()
export class CommitsService {

    async findAll(repo: 'be' | 'fe'): Promise<Commit[]> {
        const response = await octokit.request(
            `Get /repos/carlosempd/${ repo }-commit-history/commits`,
        );

        return response.data.map(el => ({
            sha: el.sha,
            message: el.commit.message,
            date: el.commit.author.date,
            author: {
                login: el.author.login,
                name: el.commit.author.name,
                email: el.commit.author.email,
                avatar: el.author.avatar_url
            }
        }));
    }
}
