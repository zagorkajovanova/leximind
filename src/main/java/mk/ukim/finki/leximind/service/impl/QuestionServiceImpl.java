package mk.ukim.finki.leximind.service.impl;

import mk.ukim.finki.leximind.model.Game;
import mk.ukim.finki.leximind.model.Question;
import mk.ukim.finki.leximind.model.Response;
import mk.ukim.finki.leximind.model.exceptions.InvalidQuestionIdException;
import mk.ukim.finki.leximind.repository.QuestionRepository;
import mk.ukim.finki.leximind.service.QuestionService;

import java.util.List;
import java.util.Optional;

public class QuestionServiceImpl implements QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<Question> listAllQuestions() {
        return this.questionRepository.findAll();
    }

    @Override
    public Question findById(Long id) {
        return this.questionRepository.findById(id).orElseThrow(InvalidQuestionIdException::new);
    }

    @Override
    public List<Question> findAllByGame(Game game) {
        return game.getQuestions();
    }

    @Override
    public Optional<Question> save(String text, String audioPath, List<Response> responses, Response correct_answer) {
        Question question = new Question(text,audioPath,responses,correct_answer);

        return Optional.of(this.questionRepository.save(question));
    }

    @Override
    public Question delete(Long id) {
        Question question = this.findById(id);
        this.questionRepository.delete(question);

        return question;
    }
}
