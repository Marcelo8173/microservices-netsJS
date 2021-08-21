import { IPlayerDTO } from "src/players/DTO/player.dto";

export interface IPlayerController {
    createPlayer(player: IPlayerDTO ): Promise<IPlayerDTO> 
    listPlayer(): Promise<IPlayerDTO[]> 
}