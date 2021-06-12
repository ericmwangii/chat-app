package com.ecommerce.books.books;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

	private final BookRepository bookRepository;

	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}

	@Autowired
    public List<Book> getBooks(){
		return bookRepository.findAll();
	}

	public void addnewBook(Book book) {
		// System.out.println(book);
		bookRepository.save(book);

	}

	public void deleteBook(Long bookId) {
		boolean exists = bookRepository.existsById(bookId);
		if(!exists){
			throw new IllegalStateException("Book with id" + bookId + " does not exist");
		}
		bookRepository.deleteById(bookId);
	}

	@Transactional
	public void updateBook(Long bookId, String title, String author, String description, Number price, String photourl) {
		Book book = bookRepository.findById(bookId)
		.orElseThrow(() -> new IllegalStateException(
			"book with id" + bookId + " does not exist"));

	if(title != null && title.length() > 0 && !Objects.equals(book.getTitle(), title)){
		book.setTitle(title);
	}
	if(author != null && author.length() > 0 && !Objects.equals(book.getAuthor(), author)){
		book.setAuthor(author);
	}
	if(description != null && description.length() > 0 && !Objects.equals(book.getDescription(), description)){
		book.setDescription(description);
	}

	if(price != null && !Objects.equals(book.getPrice(), price)){
		book.setPrice(price);
	}

	if(photourl != null && photourl.length() > 0 && !Objects.equals(book.getphotourl(), photourl)){
		book.setphotourl(photourl);
	}

	}

}
