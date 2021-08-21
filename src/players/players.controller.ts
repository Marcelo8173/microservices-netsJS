import { Controller, Post } from '@nestjs/common';
import { IPlayerController } from '../implementation/player-implementations'

@Controller('players')
export class PlayersController implements IPlayerController {

    @Post()
    async createPlayer() {

    }

}
