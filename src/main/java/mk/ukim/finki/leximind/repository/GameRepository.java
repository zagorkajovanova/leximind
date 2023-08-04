package mk.ukim.finki.leximind.repository;

import mk.ukim.finki.leximind.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GameRepository extends JpaRepository<Game,Long> {
    List<Game> findAllByTitleContainingIgnoreCase(String searchTerm);
    Optional<Game> findById(Long id);
    List<Game> findAllByOrderByIdAsc();
}
