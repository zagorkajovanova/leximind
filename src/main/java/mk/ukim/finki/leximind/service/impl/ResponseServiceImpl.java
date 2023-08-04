package mk.ukim.finki.leximind.service.impl;

import mk.ukim.finki.leximind.model.Response;
import mk.ukim.finki.leximind.model.exceptions.InvalidResponseIdException;
import mk.ukim.finki.leximind.repository.ResponseRepository;
import mk.ukim.finki.leximind.service.ResponseService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResponseServiceImpl implements ResponseService {
    private final ResponseRepository responseRepository;

    public ResponseServiceImpl(ResponseRepository responseRepository) {
        this.responseRepository = responseRepository;
    }

    @Override
    public List<Response> listAllResponses() {
        return this.responseRepository.findAll();
    }

    @Override
    public Response findById(Long id) {
        return this.responseRepository.findById(id).orElseThrow(InvalidResponseIdException::new);
    }

    @Override
    public Optional<Response> save(String text) {
        Response response = new Response(text);

        return Optional.of(this.responseRepository.save(response));
    }

    @Override
    public Response delete(Long id) {
        Response response = this.findById(id);
        this.responseRepository.delete(response);

        return response;
    }
}
