package mk.ukim.finki.leximind.model.exceptions;

public class InvalidUserIdException extends RuntimeException{
    public InvalidUserIdException() {
        super("Invalid User ID!");
    }
}