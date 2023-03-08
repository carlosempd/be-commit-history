import { Controller, Get } from '@nestjs/common';
import { Octokit } from 'octokit';

const octokit = new Octokit({});

@Controller('commits')
export class CommitsController {
    @Get()
    async findAll() {
        const response = await octokit.request(
            'Get /repos/carlosempd/be-commit-history/commits',
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
