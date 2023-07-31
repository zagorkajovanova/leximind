package mk.ukim.finki.leximind.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Response {
    @Id
    @GeneratedValue
    Long id;
    String text;

    public Response() {
    }

    public Response(String text) {
        this.text = text;
    }
}

