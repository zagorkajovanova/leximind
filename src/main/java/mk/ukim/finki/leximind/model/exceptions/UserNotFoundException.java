package mk.ukim.finki.leximind.model.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException() {
        super("User not found!");
    }
}
