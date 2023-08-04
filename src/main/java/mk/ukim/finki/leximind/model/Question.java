package mk.ukim.finki.leximind.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String text;
    String image; //text + image for some game, only text and only image for others

    @ManyToMany
    private List<Response> responses;

    @OneToOne
    private Response correct_answer;

    public Question() {
        responses = new ArrayList<>();
    }

    public Question(String text, String image, List<Response> responses, Response correct_answer) {
        this.text = text;
        this.image = image;
        this.responses = responses;
        this.correct_answer = correct_answer;
    }
}
