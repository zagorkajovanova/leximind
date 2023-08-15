package mk.ukim.finki.leximind.model.dto;

import lombok.Data;
import mk.ukim.finki.leximind.model.Game;
import mk.ukim.finki.leximind.model.User;

@Data
public class FinishGameRequestDTO {
    private Game game;
    private User user;

    public FinishGameRequestDTO(Game game, User user) {
        this.game = game;
        this.user = user;
    }
}
