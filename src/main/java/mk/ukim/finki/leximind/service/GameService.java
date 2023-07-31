package mk.ukim.finki.leximind.service;

import mk.ukim.finki.leximind.model.Game;
import mk.ukim.finki.leximind.model.Question;
import mk.ukim.finki.leximind.model.enums.Level;

import java.util.List;
import java.util.Optional;

public interface GameService {
    List<Game> listAllGames();

    Game findById(Long id);

    List<Game> findAllByTitle(String title);

    Optional<Game> save(String title, String description, Level level, String imgUrl, int points, List<Question> questions);

    Game edit(Long id, String title, String description, Level level, String imgUrl, int points, List<Question> questions);

    Game delete(Long id);
}
