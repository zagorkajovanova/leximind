package mk.ukim.finki.leximind.service.impl;

import mk.ukim.finki.leximind.model.Game;
import mk.ukim.finki.leximind.model.Question;
import mk.ukim.finki.leximind.model.enums.Level;
import mk.ukim.finki.leximind.model.exceptions.InvalidGameIdException;
import mk.ukim.finki.leximind.repository.GameRepository;
import mk.ukim.finki.leximind.service.GameService;

import java.util.List;
import java.util.Optional;

public class GameServiceImpl implements GameService {
    private final GameRepository gameRepository;

    public GameServiceImpl(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @Override
    public List<Game> listAllGames() {
        return gameRepository.findAll();
    }

    @Override
    public Game findById(Long id) {
        return gameRepository.findById(id).orElseThrow(InvalidGameIdException::new);
    }

    @Override
    public List<Game> findAllByTitle(String title) {
        return gameRepository.findAllByTitleContainingIgnoreCase(title);
    }

    @Override
    public Optional<Game> save(String title, String description, Level level, String imgUrl, int points, List<Question> questions) {
        Game game = new Game(title,description,level,imgUrl,points,questions);

        return Optional.of(gameRepository.save(game));
    }

    @Override
    public Game edit(Long id, String title, String description, Level level, String imgUrl, int points, List<Question> questions) {
        Game game = this.findById(id);
        game.setTitle(title);
        game.setDescription(description);
        game.setLevel(level);
        game.setImg_url(imgUrl);
        game.setPoints(points);
        game.setQuestions(questions);

        return this.gameRepository.save(game);
    }

    @Override
    public Game delete(Long id) {
        Game game = findById(id);
        this.gameRepository.delete(game);
        return game;
    }
}
