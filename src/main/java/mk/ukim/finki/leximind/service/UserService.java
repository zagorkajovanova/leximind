package mk.ukim.finki.leximind.service;

import mk.ukim.finki.leximind.model.Game;
import mk.ukim.finki.leximind.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> listAllUsers();

    User findById(Long id);

    User findByNickname(String nickname);

    Optional<User> save(String nickname);

    User edit(Long id, String nickname);

    void deleteUser(Long id);

    boolean userExists(String nickname);

    void saveFinishedGame(User user, Game game);
}
