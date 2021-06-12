package com.ecommerce.books.books;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

//    @Query("SELECT s FROM Book s WHERE s.title = ?! ")
    Optional<Book> findBookBytitle(String title);

}
