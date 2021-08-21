import { Body, Controller, Get, Post } from '@nestjs/common';
import { IPlayerController } from './implementation/player-implementations'
import { IPlayerDTO } from './DTO/player.dto'
import { PlayersService } from './players.service';

@Controller('player')
export class PlayersController implements IPlayerController {

    constructor(private playersService: PlayersService) { }
    
    @Get()
    async listPlayer(): Promise<IPlayerDTO[]> {
        return this.playersService.listPlayerService()
    }

    @Post()
    async createPlayer(@Body() player: IPlayerDTO): Promise<IPlayerDTO> {
        
        const playerSaved = await this.playersService.createPlayerService(player)

        return playerSaved;
    }

}
