import { Injectable } from '@nestjs/common';
import { IPlayerDTO } from './DTO/player.dto';
import { PlayerModel } from './player.model'

@Injectable()
export class PlayersService {
    private playerArray = []

    async createPlayerService(playerDTO: IPlayerDTO ): Promise<IPlayerDTO> {
       //persistir
        
        const player: PlayerModel = { 
            id:"12312",
            name:playerDTO.name,
            email: playerDTO.email,
            phone_number: playerDTO.phone_number
        }
        this.playerArray.push(player)
        return player;
    }

    async listPlayerService(): Promise<IPlayerDTO[]> {         
         return this.playerArray;
     }
}