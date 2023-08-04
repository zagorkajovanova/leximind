package mk.ukim.finki.leximind.service.impl;

import mk.ukim.finki.leximind.model.Game;
import mk.ukim.finki.leximind.model.User;
import mk.ukim.finki.leximind.model.exceptions.InvalidUserIdException;
import mk.ukim.finki.leximind.model.exceptions.UserNotFoundException;
import mk.ukim.finki.leximind.repository.UserRepository;
import mk.ukim.finki.leximind.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


    public UserServiceImpl(UserRepository usersRepository) {
        this.userRepository = usersRepository;
    }

    @Override
    public List<User> listAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public User findById(Long id) {
        return this.userRepository.findById(id).orElseThrow(InvalidUserIdException::new);
    }

    @Override
    public User findByNickname(String nickname) {
        return this.userRepository.findByNickname(nickname).orElseThrow(UserNotFoundException::new);
    }

    @Override
    public Optional<User> save(String nickname) {
        User userTosave = new User(nickname);

        return Optional.of(this.userRepository.save(userTosave));
    }

    @Override
    public User edit(Long id, String nickname) {
        User userToEdit = this.findById(id);
        userToEdit.setNickname(nickname);
        return this.userRepository.save(userToEdit);
    }

    @Override
    public void deleteUser(Long id) {
        if(id == null) throw new IllegalArgumentException();
        this.userRepository.deleteById(id);
    }

    @Override
    public boolean userExists(String nickname) {
        return this.userRepository.findByNickname(nickname).isPresent();
    }

    @Override
    public void saveFinishedGame(User user, Game game) {
        List<Game> finishedGamesList = user.getFinishedGames();
        finishedGamesList.add(game);
        user.setFinishedGames(finishedGamesList);

        this.userRepository.save(user);
    }
}
