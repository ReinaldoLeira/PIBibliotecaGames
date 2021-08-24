-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gamepadpi
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `analises`
--

DROP TABLE IF EXISTS `analises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `analises` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `titulo` varchar(120) NOT NULL,
  `analise` varchar(300) NOT NULL,
  `nota` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idJogos` bigint NOT NULL,
  `blocked` tinyint(1) NOT NULL,
  `idPerfis` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_analises_jogos1_idx` (`idJogos`),
  KEY `fk_analises_perfis1_idx` (`idPerfis`),
  CONSTRAINT `fk_analises_jogos1` FOREIGN KEY (`idJogos`) REFERENCES `jogos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_analises_perfis1` FOREIGN KEY (`idPerfis`) REFERENCES `perfis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `analises`
--

LOCK TABLES `analises` WRITE;
/*!40000 ALTER TABLE `analises` DISABLE KEYS */;
INSERT INTO `analises` VALUES (3,'Olá','Aqui fica a a pagina das Analises ',5,'2021-08-22 10:32:12','2021-08-22 10:32:12',4,0,1),(4,'Jogo muito bom','Jogo maravilhoso, porem... Sem porem.',5,'2021-08-22 12:41:38','2021-08-22 12:41:38',4,0,4),(5,'Jogo F*da','Jogo bonito, legal, e tudo mais. ',5,'2021-08-22 12:47:51','2021-08-22 12:47:51',4,0,5),(7,'Foi criado por mim','OLa',4,'2021-08-23 13:37:42','2021-08-23 13:37:42',3,0,6),(8,'jogo bom','1234',5,'2021-08-23 13:45:59','2021-08-23 13:45:59',7,0,1);
/*!40000 ALTER TABLE `analises` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-23 11:03:57
