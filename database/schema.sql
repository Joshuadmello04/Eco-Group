CREATE DATABASE ContactDB;
GO

USE ContactDB;
GO

CREATE TABLE ContactMessages (
    id INT IDENTITY PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    email NVARCHAR(150) NOT NULL,
    phone NVARCHAR(20) NOT NULL,
    company NVARCHAR(150),
    subject NVARCHAR(200) NOT NULL,
    message NVARCHAR(MAX) NOT NULL,
    createdAt DATETIME2 DEFAULT SYSDATETIME()
);

CREATE TABLE AdminUsers (
    id INT IDENTITY PRIMARY KEY,
    username NVARCHAR(50) UNIQUE NOT NULL,
    passwordHash NVARCHAR(255) NOT NULL
);

CREATE TABLE Testimonials (
    id INT IDENTITY PRIMARY KEY,
    title NVARCHAR(150),
    quote NVARCHAR(MAX) NOT NULL,
    company NVARCHAR(200) NOT NULL,
    author NVARCHAR(200) NOT NULL,
    isActive BIT DEFAULT 1,
    createdAt DATETIME2 DEFAULT SYSDATETIME()
);

CREATE TABLE GalleryCategories (
    id INT IDENTITY PRIMARY KEY,
    title NVARCHAR(100) NOT NULL,
    description NVARCHAR(255),
    isActive BIT DEFAULT 1
);

CREATE TABLE GalleryImages (
    id INT IDENTITY PRIMARY KEY,
    categoryId INT NOT NULL,
    title NVARCHAR(150),
    imageUrl NVARCHAR(255) NOT NULL,
    createdAt DATETIME2 DEFAULT SYSDATETIME(),
    isActive BIT DEFAULT 1,
    FOREIGN KEY (categoryId) REFERENCES GalleryCategories(id)
);
