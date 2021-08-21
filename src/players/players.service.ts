import { Injectable } from '@nestjs/common';
import { IPlayerDTO } from './DTO/player.dto';
import { PlayerModel } from './player.model'
import { v4 as uuid } from 'uuid'

@Injectable()
export class PlayersService {
    private playerArray = []

    async createPlayerService(playerDTO: IPlayerDTO ): Promise<IPlayerDTO> {        
        const player: PlayerModel = { 
            id:uuid(),
            name:playerDTO.name,
            email: playerDTO.email,
            phone_number: playerDTO.phone_number,
            avatar_url: "",
            ranking: "",
            ranking_position: 1
        }
        this.playerArray.push(player)
        return player;
    }

    async listPlayerService(): Promise<IPlayerDTO[]> {         
         return this.playerArray;
     }
}