package mk.ukim.finki.leximind.model;

import lombok.Data;
import mk.ukim.finki.leximind.model.enums.Level;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Game {
    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String description;

    @Enumerated(value = EnumType.STRING)
    private Level level;
    private String img_url;
    private int points;

    @ManyToMany
    private List<Question> questions;

    public Game() {
    }

    public Game(String title, String description, Level level, String img_url, int points, List<Question> questions) {
        this.title = title;
        this.description = description;
        this.level = level;
        this.img_url = img_url;
        this.points = points;
        this.questions = questions;
    }
}
