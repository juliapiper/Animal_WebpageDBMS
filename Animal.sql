CREATE DATABASE ANIMALS;
USE ANIMALS;

#Drop Database ANIMALS

CREATE TABLE bird (
    bird_ID VARCHAR(50) PRIMARY KEY,
    max_size DECIMAL(8,2),
    min_size DECIMAL(8,2),
    diet_type VARCHAR(50),
    in_north_america VARCHAR(1),
    lifespan INT,
    can_fly VARCHAR(1)
);

CREATE TABLE mammal (
    mammal_ID VARCHAR(50) PRIMARY KEY,
    max_size DECIMAL(8,2),
    min_size DECIMAL(8,2),
    diet_type VARCHAR(50),
    in_north_america VARCHAR(1),
    lifespan INT,
    can_fly VARCHAR(1)
);


CREATE TABLE insect (
    insect_ID VARCHAR(50) PRIMARY KEY,
    max_size DECIMAL(8,2) NULL,
    min_size DECIMAL(8,2) NULL,
    diet_type VARCHAR(50) NULL,
    in_north_america VARCHAR(1) NULL,
    lifespan INT NULL,
    can_fly VARCHAR(1) NULL
);

# herb mammals in NA  button
SELECT *
FROM mammal
WHERE diet_type = 'Omnivore' AND in_north_america = 'Y'
LIMIT 6;

#small birds in NA
SELECT *
FROM bird
WHERE in_north_america = 'Y'
ORDER BY min_size ASC
LIMIT 6;

#non_flying insects in NA
SELECT *
FROM insect
WHERE can_fly = 'Y' AND in_north_america = 'Y'
LIMIT 6;