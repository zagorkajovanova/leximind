package mk.ukim.finki.leximind.web.rest;

import mk.ukim.finki.leximind.model.Game;
import mk.ukim.finki.leximind.service.GameService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/games")
public class GamesController {

    private final GameService gameService;

    public GamesController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping
    public List<Game> getAllGames() {
        return this.gameService.findAllGamesOrderedById();
    }



}
