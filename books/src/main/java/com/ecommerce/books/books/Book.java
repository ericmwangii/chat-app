package com.ecommerce.books.books;


import javax.persistence.*;

@Entity
@Table
public class Book {
  @Id
  @SequenceGenerator(
    name = "book_sequence",
    sequenceName= "book_sequence",
    allocationSize = 1
  )
  @GeneratedValue(
    strategy = GenerationType.SEQUENCE,
    generator = "book_sequence"
  )
    private Long id;
    private String title;
    private String author;
    private String description;
    private Number price;
    private String photourl;


    public Book() {
    }


    public Book(Long id, String title, String author, String description, Number price, String photourl) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.price = price;
        this.photourl = photourl;
    }

    public Book(String title, String author, String description, Number price, String photourl) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.price = price;
        this.photourl = photourl;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Number getPrice() {
        return this.price;
    }

    public void setPrice(Number price) {
        this.price = price;
    }

    public String getphotourl() {
        return this.photourl;
    }

    public void setphotourl(String photourl) {
        this.photourl = photourl;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", title='" + getTitle() + "'" +
            ", author='" + getAuthor() + "'" +
            ", description='" + getDescription() + "'" +
            ", price='" + getPrice() + "'" +
            ", photourl='" + getphotourl() + "'" +
            "}";
    }

}
