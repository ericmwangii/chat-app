package com.ecommerce.books.books;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BookConfig {

    @Bean
    CommandLineRunner commandLineRunner(BookRepository repository) {
        return args -> {
            	Book Dune = new Book(
				"Dune",
				"Frank Herbert",
				"Space Planet, Worms",
				765,
				"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg"
			);
            Book DuneMessiah = new Book(
				"Dune Messiah",
				"Frank Herbert",
				"Continuation of Dune part one",
				800,
				"http://www.hodderscape.co.uk/wp-content/uploads/2017/03/Dune-Messiah-Cover.jpg"
			);

            Book CatcherinTherye = new Book(
				"Catcher in the Rye",
				"J. D. Salinger",
          		"catcher in the rye rye",
				625,
				"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg"
			);
			

            repository.saveAll(List.of(Dune, DuneMessiah, CatcherinTherye));

        };
    }
}
