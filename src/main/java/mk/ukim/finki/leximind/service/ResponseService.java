package mk.ukim.finki.leximind.service;

import mk.ukim.finki.leximind.model.Response;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ResponseService {
    List<Response> listAllResponses();

    Response findById(Long id);

    Optional<Response> save(String text);

    Response delete(Long id);
}
