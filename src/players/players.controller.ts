import { Body, Controller, Post } from '@nestjs/common';
import { IPlayerController } from './implementation/player-implementations'
import { IPlayerDTO } from './DTO/player.dto'

@Controller('player')
export class PlayersController implements IPlayerController {

    @Post()
    async createPlayer(@Body() player: IPlayerDTO ): Promise<IPlayerDTO> {
        //receber os dados [x]
        //mandar pro service para banco de dados

        return player;
    }

}
