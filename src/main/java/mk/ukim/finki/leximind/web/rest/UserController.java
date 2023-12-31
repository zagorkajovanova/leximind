package mk.ukim.finki.leximind.web.rest;

import mk.ukim.finki.leximind.model.Game;
import mk.ukim.finki.leximind.model.User;
import mk.ukim.finki.leximind.model.dto.FinishGameRequestDTO;
import mk.ukim.finki.leximind.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<String> saveUser(@RequestBody User user) {
        try {
            if(!this.userService.userExists(user.getNickname())) {
                userService.save(user.getNickname());
            }
            return ResponseEntity.ok("User saved successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving user.");
        }
    }

    @PostMapping("/finish-game")
    public ResponseEntity<String> saveFinishedGame(@RequestBody FinishGameRequestDTO request) {
        try {
            User user = this.userService.findByNickname(request.getUser().getNickname());
            this.userService.saveFinishedGame(user, request.getGame());
            return ResponseEntity.ok("Saved finished game.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving finished game.");
        }
    }

    @GetMapping("/{nickname}")
    public ResponseEntity<User> getUserObject(@PathVariable String nickname) {
        User user = this.userService.findByNickname(nickname);
        if(user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
