-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gamepadPi
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gamepadPi
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gamepadPi` DEFAULT CHARACTER SET utf8 ;
USE `gamepadPi` ;

-- -----------------------------------------------------
-- Table `gamepadPi`.`perfis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`perfis` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `sobre` VARCHAR(300) NULL,
  `foto` VARCHAR(500) NULL,
  `blocked` TINYINT(1) NOT NULL,
  `instagram` VARCHAR(150) NULL,
  `facebook` VARCHAR(150) NULL,
  `twitter` VARCHAR(150) NULL,
  `usuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`jogos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`jogos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(120) NOT NULL,
  `desenvolvedor` VARCHAR(120) NOT NULL,
  `descricao` VARCHAR(500) NOT NULL,
  `lancamento` VARCHAR(10) NOT NULL,
  `capa` VARCHAR(500) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `validado` TINYINT(1) NOT NULL,
  `createdBy` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`analises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`analises` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(120) NOT NULL,
  `analise` VARCHAR(300) NOT NULL,
  `nota` TINYINT(1) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `idJogos` BIGINT NOT NULL,
  `blocked` TINYINT(1) NOT NULL,
  `idPerfis` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_analises_jogos1_idx` (`idJogos` ASC) VISIBLE,
  INDEX `fk_analises_perfis1_idx` (`idPerfis` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_analises_jogos1`
    FOREIGN KEY (`idJogos`)
    REFERENCES `gamepadPi`.`jogos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_analises_perfis1`
    FOREIGN KEY (`idPerfis`)
    REFERENCES `gamepadPi`.`perfis` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`noticias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`noticias` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(120) NOT NULL,
  `descricao` VARCHAR(1000) NOT NULL,
  `capa` VARCHAR(500) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `idPerfis` BIGINT NOT NULL,
  `subtitulo` VARCHAR(100) NULL,
  `autor` VARCHAR(300) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_noticias_perfis1_idx` (`idPerfis` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_noticias_perfis1`
    FOREIGN KEY (`idPerfis`)
    REFERENCES `gamepadPi`.`perfis` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`midias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`midias` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `tipo` ENUM('IMAGEM', 'VIDEO') NOT NULL,
  `path` VARCHAR(500) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `idPerfis` BIGINT NOT NULL,
  `idJogos` BIGINT NOT NULL,
  `titulo` VARCHAR(30) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_midias_perfis1_idx` (`idPerfis` ASC) VISIBLE,
  INDEX `fk_midias_jogos1_idx` (`idJogos` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_midias_perfis1`
    FOREIGN KEY (`idPerfis`)
    REFERENCES `gamepadPi`.`perfis` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_midias_jogos1`
    FOREIGN KEY (`idJogos`)
    REFERENCES `gamepadPi`.`jogos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`posts` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(300) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `idPerfis` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_perfis1_idx` (`idPerfis` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_perfis1`
    FOREIGN KEY (`idPerfis`)
    REFERENCES `gamepadPi`.`perfis` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`generos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`plataformas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`plataformas` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`users` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `senha` VARCHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `blocked` TINYINT(1) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `role` ENUM('ADMIN', 'USER') NOT NULL,
  `idPerfis` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_users_perfis1_idx` (`idPerfis` ASC) VISIBLE,
  CONSTRAINT `fk_users_perfis1`
    FOREIGN KEY (`idPerfis`)
    REFERENCES `gamepadPi`.`perfis` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`jogosPlataformas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`jogosPlataformas` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `idJogos` BIGINT NOT NULL,
  `idPlataformas` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_jogosPlataformas_jogos1_idx` (`idJogos` ASC) VISIBLE,
  INDEX `fk_jogosPlataformas_plataformas1_idx` (`idPlataformas` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_jogosPlataformas_jogos1`
    FOREIGN KEY (`idJogos`)
    REFERENCES `gamepadPi`.`jogos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_jogosPlataformas_plataformas1`
    FOREIGN KEY (`idPlataformas`)
    REFERENCES `gamepadPi`.`plataformas` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`jogosGeneros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`jogosGeneros` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `idGeneros` BIGINT NOT NULL,
  `idJogos` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_jogosGenero_generos1_idx` (`idGeneros` ASC) VISIBLE,
  INDEX `fk_jogosGenero_jogos1_idx` (`idJogos` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_jogosGenero_generos1`
    FOREIGN KEY (`idGeneros`)
    REFERENCES `gamepadPi`.`generos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_jogosGenero_jogos1`
    FOREIGN KEY (`idJogos`)
    REFERENCES `gamepadPi`.`jogos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`bibliotecas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`bibliotecas` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `idPerfis` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bibliotecas_perfis1_idx` (`idPerfis` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_bibliotecas_perfis1`
    FOREIGN KEY (`idPerfis`)
    REFERENCES `gamepadPi`.`perfis` (`id`)
    ON DELETE cascade
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamepadPi`.`bibliotecasJogos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamepadPi`.`bibliotecasJogos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `plataforma` VARCHAR(50) NOT NULL,
  `idJogos` BIGINT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `idBibliotecas` BIGINT NOT NULL,
  `obtido` ENUM('SIM', 'DESEJO') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_bibliotecasJogos_jogos1_idx` (`idJogos` ASC) VISIBLE,
  INDEX `fk_bibliotecasJogos_bibliotecas1_idx` (`idBibliotecas` ASC) VISIBLE,
  CONSTRAINT `fk_bibliotecasJogos_jogos1`
    FOREIGN KEY (`idJogos`)
    REFERENCES `gamepadPi`.`jogos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_bibliotecasJogos_bibliotecas1`
    FOREIGN KEY (`idBibliotecas`)
    REFERENCES `gamepadPi`.`bibliotecas` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
