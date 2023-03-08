import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { Commit } from 'src/core/models/commit.model';


@Controller('commits')
export class CommitsController {

    constructor(private commitService: CommitsService) {}

    @Get()
    findAll(@Query('repo') repo: 'be' | 'fe'): Promise<Commit[]> {
        return this.commitService.findAll(repo);
    }
}
