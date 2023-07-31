package mk.ukim.finki.leximind.model.exceptions;

public class InvalidQuestionIdException extends RuntimeException{
    public InvalidQuestionIdException() {
        super("Invalid Question ID!");
    }
}