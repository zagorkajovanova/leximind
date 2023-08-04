package mk.ukim.finki.leximind.service;

import mk.ukim.finki.leximind.model.Game;
import mk.ukim.finki.leximind.model.Question;
import mk.ukim.finki.leximind.model.Response;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface QuestionService {
    List<Question> listAllQuestions();

    Question findById(Long id);

    List<Question> findAllByGame(Game game);

    Optional<Question> save(String text, String audioPath, List<Response> responses, Response correct_answer);

    Question delete(Long id);
}
